import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import { database, doc, deleteDoc } from '../config/firebaseconfig';
import { onSnapshot, collection } from 'firebase/firestore';
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Fornecedor({navigation}) {
  const [task, setTask] = useState([])
  
  // pega infomacoes do banco e adiciona na list
  // seta a task com os dados do banco
  useEffect (() => {
    const tasksCollection = collection(database, 'Fornecedor')
    const listen = onSnapshot(tasksCollection, (query) => {
      const list = []
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id})
      })
      setTask(list)
    })
    return ()  => listen();
  }, [])

  // funcao para deletar a task
  function deleteTask (id) {
    const taskdocRef = doc(database, 'Fornecedor', id)
    deleteDoc(taskdocRef)
  }

    return (
        <View style={styles.container}>
          <View style={styles.topBar}>
            <Ionicons name="chevron-back" size={30} color="white" style={styles.seta}
              onPress={() => navigation.navigate('Home')}
            />
              <Text style={styles.txtFornecedor}> Fornecedor </Text>
              <Octicons name="people" size={60} color="white" style={styles.icon}/> 
          </View>
          <View style={styles.containerB}>
        <FlatList
          data={task}
          renderItem={({item}) => {
            return(
              <View>
                <TouchableOpacity onPress={()=> {
                  navigation.navigate("AlterarFornecedor",{
                    id:item.id,
                      codigo: item.codigo,
                      nome: item.nome,
                      email: item.email,
                      endereco: item.endereco,
                      telefone: item.telefone,
                  })
              }}>
                <View style={styles.tasks}>               
                <Text style={styles.txtitem}> 
                  Cod: {item.codigo}       Nome: {item.nome}</Text>
                <Text style={styles.txtitem}>Email: {item.email}</Text>
                <Text style={styles.txtitem}>Endereço: {item.endereco}</Text>
                <Text style={styles.txtitem}>Telefone: {item.telefone}</Text>
                </View>
                </TouchableOpacity>
                
                <View style={styles.lixo}>
                <TouchableOpacity onPress={() => { deleteTask(item.id) }}>
                  <Entypo name="trash" size={24} color="white"/>
                </TouchableOpacity>
                </View>
                
              </View>
            )
          }}
        />
          </View>

          <TouchableOpacity style={styles.btnNewTask} onPress={() => navigation.navigate('AddFornecedor')}>
          <Text style={styles.txtbtnNewTask}> + </Text>
        </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  seta:{
    flex: 1,
    position: 'absolute',
    paddingLeft: 30,
    top: 25
  },
  txtFornecedor:{
    color: '#fff',
    textAlign: 'center',
  },
  icon:{
    flex: 1,
    position: 'absolute',
    paddingLeft: 300,
    top: 10
  },
  topBar:{
    backgroundColor: '#093f88',
    justifyContent: 'space-around',
    width: 390,
    height: 80,
    top: 50,
  },
  btnNewTask:{
    backgroundColor: '#093f88',
    justifyContent: 'center',
    alignItems: 'center', 
    height: 60,
    width: 60,
    borderRadius: 50,
    bottom: 30,
    marginLeft: 20,
    position: 'absolute'
    
  },
  txtbtnNewTask:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
    paddingBottom: 5
  },
  containerB:{
    flex: 1,
    top: 80,
  },

  txtitem:{
    color: 'black',
    fontSize:12,
    marginLeft:20,
    top: 8,

  },
  tasks:{
    backgroundColor: '#cccccc',
    marginLeft:12,
    width: 290,
    height: 75,
    borderRadius: 10,
  },
  lixo:{
    marginLeft: 311,
    backgroundColor: '#093f88',
    bottom: 74,
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgitem:{
    height: 55,
    width: 55,
    position: 'absolute',
    marginLeft: 10,
    top: 10,
    borderRadius:5,
  },
});

/* 
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Fornecedor({navigation}) {
    
    return (
        <View style={styles.container}>
          <View style={styles.topBar}>
            <Ionicons name="chevron-back" size={30} color="white" style={styles.seta}
              onPress={() => navigation.navigate('Home')}
            />
              <Text style={styles.txtFornecedor}> Fornecedor </Text>
            <Octicons name="people" size={60} color="white" style={styles.icon}/> 
          </View>

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  seta:{
    flex: 1,
    position: 'absolute',
    paddingLeft: 30,
    top: 25
  },
  txtFornecedor:{
    color: '#fff',
    textAlign: 'center',
  },
  icon:{
    flex: 1,
    position: 'absolute',
    paddingLeft: 300,
    top: 10
  },
  topBar:{
    backgroundColor: '#093f88',
    justifyContent: 'space-around',
    width: 390,
    height: 80,
    top: 50,
  },
});
 */