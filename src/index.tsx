import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'rn-fingerprint-change' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const RnFingerprintChange = NativeModules.RnFingerprintChange
  ? NativeModules.RnFingerprintChange
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export async function hasFingerPrintChanged(): Promise<boolean> {
  return !!(await RnFingerprintChange.hasFingerPrintChanged());
}
