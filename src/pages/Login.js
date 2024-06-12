import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Entradas({navigation}) {
    
    return (
        <View style={styles.container}>
          <View style={styles.topBar}>
              <Text style={styles.txtLogin}> Login </Text>
          </View>
            <TouchableOpacity style={styles.botao}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.txtBotao}>Log In</Text>
            </TouchableOpacity> 

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  txtLogin:{
    color: '#fff',
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#093f88',
    justifyContent: 'center',
    width: 100,
    height: 50,
    top: 500,
    borderRadius: 20,
    color: '#fff',
  },
  txtBotao: {
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
  },
  topBar:{
    backgroundColor: '#093f88',
    justifyContent: 'space-around',
    width: 390,
    height: 80,
    top: 50,
  },
});
