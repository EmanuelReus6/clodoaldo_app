import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import { database, doc, deleteDoc } from '../config/firebaseconfig';
import { onSnapshot, collection } from 'firebase/firestore';
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function RelacaodeUsuario({navigation}) {
  const [task, setTask] = useState([])
  
  // pega infomacoes do banco e adiciona na list
  // seta a task com os dados do banco
  useEffect (() => {
    const tasksCollection = collection(database, 'Usuario')
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
    const taskdocRef = doc(database, 'Usuario', id)
    deleteDoc(taskdocRef)
  }

  function imagem(uri) {
    return(
      <Image style={styles.imgitem} source={{uri: uri}}/>
    )
  }

    return (
        <View style={styles.container}>
          <View style={styles.topBar}>
            <Ionicons name="chevron-back" size={30} color="white" style={styles.seta}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
          <View style={styles.containerB}>
        <FlatList
          data={task}
          renderItem={({item}) => {
            return(
              <View>
                <TouchableOpacity onPress={()=> {
                  navigation.navigate("AlterarUsuario",{
                    id:item.id,
                      codigo: item.codigo,
                      nome: item.nome,
                      email: item.email,
                      papel: item.papel,
                      senha: item.senha,
                      uri: item.uri,
                  })
              }}>
                <View style={styles.tasks}>               

                {imagem(item.uri)}
                <Text style={styles.txtitem}>Código: {item.codigo}</Text>
                <Text style={styles.txtitem}>Nome: {item.nome}</Text>
                <Text style={styles.txtitem}>email: {item.email}</Text>
                <Text style={styles.txtitem}>papel: {item.papel}  senha: {item.senha}
                </Text>
                </View>
                </TouchableOpacity>
                <View style={styles.lixo}>
                <TouchableOpacity onPress={() => { deleteTask(item.id) }}>
                  <Entypo name="trash" size={24} color="white"/>
                </TouchableOpacity>
                
                </View>

{/*                 <Text
              style={styles.txtdescription}
              onPress={()=> {
                  navigation.navigate("AlterarEstoque",{
                      codigo: item.codigo,
                      nome: item.nome,
                      email: item.email,
                      papel: item.papel,
                      nome: item.nome,
                      senha: item.senha,
                      uri: item.uri,
                  })
              }}>
                  {item.description}
              </Text> */}
                
              </View>
            )
          }}
        />
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
  txtEstoque:{
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
    marginLeft:95,
    top: 13,

  },
  tasks:{
    backgroundColor: '#cccccc',
    marginLeft:12,
    width: 290,
    height: 100,
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
    height: 75,
    width: 75,
    position: 'absolute',
    marginLeft: 10,
    top: 10,
    borderRadius:5,
  },
});
