import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { hasFingerPrintChanged } from 'rn-fingerprint-change';

export default function App() {
  const [hasChanged, setHasChanged] = React.useState<boolean | undefined>();

  React.useEffect(() => {
    hasFingerPrintChanged().then(setHasChanged);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{hasChanged ? "hasChanged" : "NotChanged"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
