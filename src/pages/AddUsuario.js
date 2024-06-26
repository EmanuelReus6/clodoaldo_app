import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { database, collection, addDoc } from '../config/firebaseconfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 
import {onSnapshot} from 'firebase/firestore';

export default function AddUsuario({ navigation }) {
  const [task2, setTask2] = useState([])
  const [newcodigo, setNewCodigo] = useState('');
  const [newemail, setNewEmail] = useState('');
  const [newnome, setNewNome] = useState('');
  const [newpapel, setNewPapel] = useState('');
  const [newsenha, setNewSenha] = useState('');
  const [newuri, setNewUri] = useState('')

  useEffect (() => {
    const tasksCollection2 = collection(database, 'Usuario')
    const listen = onSnapshot(tasksCollection2, (query) => {
      const list2 = []
      query.forEach((doc) => {
        list2.push({...doc.data(), id: doc.id})
      })
      setTask2(list2)
    })
    return ()  => listen();
  }, [])

  async function addTask() {
    if (!newcodigo || !newemail || !newnome || !newpapel || !newsenha || !newuri) {
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
        uri: newuri,
      });

      // Salvar no Firebase Authentication
      const auth = getAuth(); // Inicializa a instância de autenticação
      await createUserWithEmailAndPassword(auth, newemail, newsenha);

      
    } catch (error) {
      console.error("Error adding document: ", error);
      Alert.alert('Erro', 'Houve um erro ao salvar o usuário.');
    }
  }
function addverificado(){
  var bool = "False";
  for (var i = 0; i < task2.length; i++){
    if(task2[i].email == newemail){
      var bool = "True"
    }
  }
  if (bool == "True"){
    alert("O Email já esta sendo utilizado");
  }
  else{
    addTask()
  }
}

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.txtAvisos}>Perfil</Text>
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
        <TextInput
          style={styles.input}
          placeholder="uri"
          value={newuri}
          onChangeText={setNewUri}
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <Pressable style={styles.btnsave} onPress={addverificado}>
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
});
