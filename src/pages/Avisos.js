import { StyleSheet, Text, View } from 'react-native';

export default function Entradas({navigation}) {
    
    return (
        <View style={styles.container}>
          <View style={styles.topBar}>
              <Text style={styles.txtAvisos}> Avisos </Text>
          </View>

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  txtAvisos:{
    color: '#fff',
    textAlign: 'center',
  },
  topBar:{
    backgroundColor: '#093f88',
    justifyContent: 'space-around',
    width: 390,
    height: 80,
    top: 50,
  },
});
