
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRnFingerprintChangeSpec.h"

@interface RnFingerprintChange : NSObject <NativeRnFingerprintChangeSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RnFingerprintChange : NSObject <RCTBridgeModule>
#endif

@end
