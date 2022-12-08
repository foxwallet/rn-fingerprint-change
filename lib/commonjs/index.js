"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasFingerPrintChanged = hasFingerPrintChanged;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'rn-fingerprint-change' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const RnFingerprintChange = _reactNative.NativeModules.RnFingerprintChange ? _reactNative.NativeModules.RnFingerprintChange : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
async function hasFingerPrintChanged() {
  return !!(await RnFingerprintChange.hasFingerPrintChanged());
}
//# sourceMappingURL=index.js.map