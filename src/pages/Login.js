import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function Login({navigation}) {
    
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
  topBar:{
    backgroundColor: '#093f88',
    justifyContent: 'center',
    width: 350,
    height: 80,
    top: 50,
  },
  txtLogin: {
    color: '#fff',
    textAlign: 'center',
  },
  txtBotao: {
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#093f88',
    justifyContent: 'center',
    width: 100,
    height: 50,
    top: 500,
    borderRadius: 20,
    color: '#fff',
  }
});
