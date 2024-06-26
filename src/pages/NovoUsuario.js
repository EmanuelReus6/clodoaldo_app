import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import { database, collection, addDoc } from '../config/firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Importe getAuth do módulo firebase/auth
import { Ionicons } from '@expo/vector-icons';

export default function NovoUsuario({ navigation }) {
  const [newcodigo, setNewCodigo] = useState('');
  const [newemail, setNewEmail] = useState('');
  const [newnome, setNewNome] = useState('');
  const [newpapel, setNewPapel] = useState('');
  const [newsenha, setNewSenha] = useState('');
  const [usuarioUid, setusuarioUid] = useState('');

  async function addTask() {

    if (!newcodigo || !newemail || !newnome || !newpapel || !newsenha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      // Salvar no Firestore
      const taskdocRef = collection(database, 'Usuario');
      await addDoc(taskdocRef, {
        codigo: parseInt(newcodigo, 10),
        email: newemail,
        nome: newnome,
        papel: newpapel,  
        senha: newsenha,
      });

      // Salvar no Firebase Authentication
      const auth = getAuth(); // Inicializa a instância de autenticação
      await createUserWithEmailAndPassword(auth, newemail, newsenha);

      navigation.navigate('Perfil');
    } catch (error) {
      console.error("Error adding document: ", error);
      Alert.alert('Erro', 'Houve um erro ao salvar o usuário.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <Ionicons name="chevron-back" size={30} color="white" style={styles.seta}
              onPress={() => navigation.navigate('Perfil')}
            />
        <Text style={styles.txtAvisos}>Novo Usuario</Text>
      </View>
      <View style={styles.perfil}>
        <TextInput
          style={styles.input}
          placeholder="6 primeiros numeros do CPF"
          value={newcodigo}
          onChangeText={setNewCodigo}
          placeholderTextColor="#000"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          value={newemail}
          onChangeText={setNewEmail}
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="nome"
          value={newnome}
          onChangeText={setNewNome}
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="papel"
          value={newpapel}
          onChangeText={setNewPapel}
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          value={newsenha}
          onChangeText={setNewSenha}
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <Pressable style={styles.btnsave} onPress={addTask}>
          <Text style={styles.txtBotao}>Salvar</Text>
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
  btnsave: {
    backgroundColor: '#1D3557',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    width: '20%',
    marginHorizontal: 5,
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
  txtBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  seta:{
    flex: 1,
    position: 'absolute',
    paddingLeft: 30,
    top: 25
  }
});
