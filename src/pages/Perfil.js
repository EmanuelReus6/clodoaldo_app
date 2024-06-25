import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { database, doc, getDoc } from '../config/firebaseconfig';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Perfil({ route, navigation }) {
  const userId = route?.params?.userId ?? '';
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [papel, setPapel] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    if (userId) {
      getUserData();
    }
  }, [userId]);

  async function getUserData() {
    try {
      const userDocRef = doc(database, 'Usuario', userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setEmail(userData.email);
        setNome(userData.nome);
        setPapel(userData.papel);
        setSenha(userData.senha);
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.txtAvisos}> Perfil </Text>
      </View>
      <View style={styles.perfil}>
      <FontAwesome5 
          style={styles.relacao} 
          name="users" 
          size={24} 
          color= '#093f88'
          onPress={() => navigation.navigate('RelacaodeUsuario')}
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="nome"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="papel"
          value={papel}
          onChangeText={setPapel}
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
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