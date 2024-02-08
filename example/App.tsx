import { StyleSheet, Text, View } from 'react-native';

import * as BrotherDdlPrint from 'brother-ddl-print';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{BrotherDdlPrint.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
