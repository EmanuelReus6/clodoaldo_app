import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.txtAvisos}> Perfil </Text>
      </View>
      <View style={styles.perfil}>
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="nome"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="papel"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          placeholderTextColor="#000"
        />
        <Pressable style={styles.botao} onPress={() => navigation.navigate('NovoUsuario')}>
          <Text style={styles.txtBotao}>Novo Usuário</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  txtAvisos: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
  },
  topBar: {
    backgroundColor: '#093f88',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 80,
  },
  perfil: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: '#000',
    width: 250,
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#9f9f9f',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: '#021D43',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  txtBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
