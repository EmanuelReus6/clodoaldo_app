import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity} from 'react-native';

export default function Entradas({navigation}) {
    
    return (
        <View style={styles.container}>
          <View style={styles.topBar}></View>
            <View style={styles.cadastro}>
              <TextInput
                style={styles.input}
                placeholder="email"
                />
              <TextInput
                style={styles.input}
                placeholder="senha"
                />
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
    backgroundColor: '#093f88',
    alignItems: 'center'
  },
  cadastro:{
    flex: 1,
    color: '#fff'
  },
  txtLogin:{
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#021D43',
    justifyContent: 'center',
    width: 100,
    height: 50,
    bottom: 50,
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
