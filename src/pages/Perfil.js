import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { database, doc, getDoc, collection } from '../config/firebaseconfig';
import {onSnapshot} from 'firebase/firestore';
import { FontAwesome5 } from '@expo/vector-icons';
import { getAuth } from 'firebase/auth';

export default function Perfil({navigation}) {
  const [task2, setTask2] = useState([])


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

function mostrarUsuario(){
  const auth = getAuth();
  const user = auth.currentUser;

  if (user !== null) {
    const email2 = user.email;
    for (var i = 0; i < task2.length; i++){
      if(task2[i].email == email2){
        if (task2[i].papel == "admin"){
        return(
          <View style={styles.viewmenor}>
      <View style={styles.perfil}>
      <Image style={styles.imagem} source={{uri: task2[i].uri}}/>
      <FontAwesome5 
          style={styles.relacao} 
          name="users" 
          size={24} 
          color= '#093f88'
          onPress={() => navigation.navigate('RelacaodeUsuario')}
        />
        <TextInput
          style={styles.input}
          placeholder={task2[i].email}
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder={task2[i].nome}
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder={task2[i].papel}
          placeholderTextColor="#000"
        />
        <Pressable style={styles.botao} onPress={() => navigation.navigate('AddUsuario')}>
          <Text style={styles.txtBotao}>Novo Usuário</Text>
        </Pressable>
        <Pressable style={styles.botao2} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.txtBotao}>Loggout</Text>
        </Pressable>
      </View>
      </View>
        );
      }
      else{
        return(
          <View style={styles.viewmenor}>
      <View style={styles.perfil}>
      <Image style={styles.imagem2} source={{uri: task2[i].uri}}/>
        <TextInput
          style={styles.input}
          placeholder={task2[i].email}
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder={task2[i].nome}
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder={task2[i].papel}
          placeholderTextColor="#000"
        />
        <Pressable style={styles.botao3} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.txtBotao}>Loggout</Text>
        </Pressable>
      </View>
      </View>
        );
      }
      }
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.txtAvisos}> Perfil </Text>
      </View>
      {mostrarUsuario()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  viewmenor: {
    top:290,


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
    marginRight: 170,
  },
  txtBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  relacao: {
    height:50,
    width:50,
    marginLeft:330,
  },
  imagem: {
    borderRadius:100,
    height:150,
    width:150,
  },
  imagem2: {
    borderRadius:100,
    height:150,
    width:150,
    bottom:50,
  },
  botao2: {
    backgroundColor: '#021D43',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    marginLeft: 170,
    bottom:69,
  },
  botao3: {
    backgroundColor: '#021D43',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
  },
});