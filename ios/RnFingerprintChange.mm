#import "RnFingerprintChange.h"
#import <LocalAuthentication/LocalAuthentication.h>

@implementation RnFingerprintChange
RCT_EXPORT_MODULE()


// See // https://reactnative.dev/docs/native-modules-ios
RCT_REMAP_METHOD(hasFingerPrintChanged,
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
    NSLog(@"start hasFingerPrintChanged");
    BOOL changed = NO;
     LAContext *context = [[LAContext alloc] init];
     NSError *error = nil;
     if ([context canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:&error]) {
       [context canEvaluatePolicy:LAPolicyDeviceOwnerAuthentication error:nil];
       NSData *domainState = [context evaluatedPolicyDomainState];

       // load the last domain state from touch id
       NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
       NSData *oldDomainState = [defaults objectForKey:@"domainTouchID"];

       if (oldDomainState) {
           changed = ![oldDomainState isEqual:domainState];
       }
       [defaults setObject:domainState forKey:@"domainTouchID"];
       [defaults synchronize];
     }
    NSNumber *result = [NSNumber numberWithBool:changed];
    resolve(result);
}


// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRnFingerprintChangeSpecJSI>(params);
}
#endif

@end
