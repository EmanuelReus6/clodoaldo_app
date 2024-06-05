import { StyleSheet, Text, View } from 'react-native';
import Fornecedor from './src/pages/Fornecedor';

export default function App() {
  return (
    <View style={styles.container}>
      <Fornecedor/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});