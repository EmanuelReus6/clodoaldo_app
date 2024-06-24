import React, { useState , useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Pressable, Image } from 'react-native';
import { auth, onAuthStateChanged  } from '../config/firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const LoginUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      navigation.navigate('Home', { idUser: userCredential.user.uid }); 

    } catch (error) {
      console.error('Error logging in:', error);
      setError(true)
    }
  };
  useEffect(() => {
    const statusAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home", { idUser: user.uid });
      }
    });

    return () => statusAuth();

  },[])

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding": "height"}
    style={styles.container}>
      <View > 
          <Image style ={styles.img} source={{uri:'https://www.canguru.com.br/media/img/assets/brand-face.png'}}/>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#8b8b8c'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#81858a'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

    {error === true
        ?
    <View style={styles.alert}>
        <Ionicons name="alert-circle" size={24} color="red" />
        <Text style={styles.txtalert}>email ou senha inválidos</Text>
    </View>
        :
    <View/>
    }
    {email === '' || password == ''
    ?
    <Pressable style={styles.btnLogin} disabled={true}>
        <Text style={styles.txtbtnLogin}>Login</Text>
    </Pressable>
    :
    <Pressable style={styles.btnLogin} onPress={LoginUser}>
        <Text style={styles.txtbtnLogin}>Login</Text>
    </Pressable> 
    }
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#093f88'
  },
  img:{
    width: 170, 
    height: 170,
    bottom: 70
 },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    borderRadius:10,
    paddingHorizontal: 10,
    borderColor: '#021D43',
    color: '#F1FAEE'
  },
  alert: {
    flexDirection: 'row',
    marginTop: 10,
  },
  txtalert: {
    fontSize: 16,
    color: 'red'
  },
  btnLogin: {
    backgroundColor:  '#021D43',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    width: '50%',
  },
  txtbtnLogin: {
    color: '#F1FAEE',
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtNewuser: {
    color: '#F1FAEE',
    fontSize: 20,
    padding:10,
    marginTop: 10,
  }
});