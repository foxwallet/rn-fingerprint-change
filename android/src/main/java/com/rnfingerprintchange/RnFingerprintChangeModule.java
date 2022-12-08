package com.rnfingerprintchange;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = RnFingerprintChangeModule.NAME)
public class RnFingerprintChangeModule extends ReactContextBaseJavaModule {
  public static final String NAME = "RnFingerprintChange";

  public RnFingerprintChangeModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void hasFingerPrintChanged(Promise promise) {
    promise.resolve(false);
  }

}
