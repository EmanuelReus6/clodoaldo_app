import { StyleSheet, Text, View } from 'react-native';

export default function Fornecedor() {
  return (
    <View style={styles.container}>
        <View style={style.topBar}>

            <Text> aaaaaaa </Text>
        </View>
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
  topBar:{
    backgroundColor: '',
    width: 100,
    height: 100,
    
  }
});