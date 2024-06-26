import { TouchableOpacity, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ScrollView  } from 'react-native';
import React, {useState, useEffect} from 'react';
import {database, addDoc, collection, doc} from '../config/firebaseconfig';
import {onSnapshot} from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function AddFornecedor({navigation}){
  const [task2, setTask2] = useState([])
  const [newcodigo, setNewcodigo] = useState(0)
  const [newnome, setNewnome] = useState(null)
  const [newemail, setNewemail] = useState(null)
  const [newendereco, setNewendereco] = useState(null)
  const [newtelefone, setNewtelefone] = useState(0)



  useEffect (() => {
    const tasksCollection2 = collection(database, 'Fornecedor')
    const listen = onSnapshot(tasksCollection2, (query) => {
      const list2 = []
      query.forEach((doc) => {
        list2.push({...doc.data(), id: doc.id})
      })
      setTask2(list2)
    })
    return ()  => listen();
  }, [])

  function addTask(){
    const taskdocRef = collection(database, 'Fornecedor')
    addDoc(taskdocRef, {
      codigo: newcodigo,
      nome: newnome,
      email: newemail,
      endereco: newendereco,
      telefone: newtelefone,
      status: true,
    })
    navigation.navigate('Fornecedor')
}

    
      function addverificado (){
        var bool = "True";
        for (var i = 0; i < task2.length; i++){
          if (task2[i].codigo == newcodigo){
              var bool = "False";

             }
          }
          if (bool == "True"){
            addTask()
          }
          else{
            alert("O Fornecedor já existe");
          }
        }
      

  return(
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
    <View style={styles.topBar}>
    <TouchableOpacity onPress={() => navigation.navigate('Fornecedor')} style={styles.seta}>
       <Ionicons name="chevron-back" size={30} color="white" />
     </TouchableOpacity>
        <Text style={styles.txtEstoque}> Fornecedor </Text>
        <Octicons name="people" size={60} color="white" style={styles.icon}/> 
    </View>
    <View style={styles.containerB} >
        <Text style={styles.inputext}> ID fornecedor: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um numero:'
          value={newcodigo}
          onChangeText={setNewcodigo}
          keyboardType="numeric"
        />
        <Text style={styles.inputext}> Nome: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite nome:'
          value={newnome}
          onChangeText={setNewnome}
        />
        <Text style={styles.inputext}> Email: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite email:'
          value={newemail}
          onChangeText={setNewemail}
        />
        <Text style={styles.inputext}> Endereço: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite endereço:'
          value={newendereco}
          onChangeText={setNewendereco}
        />
        <Text style={styles.inputext}> Telefone: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite telefone:'
          value={newtelefone}
          onChangeText={setNewtelefone}
        />
        <View style={styles.btnss}>
        <TouchableOpacity style={styles.btnsave} 
          onPress={() => {addverificado()}} >
          <Text style={styles.txtbtnsave}> Salvar </Text>
        </TouchableOpacity>
        </View>
    </View>
    </View>
     </ScrollView>
     </KeyboardAvoidingView>
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
    top: 50,
    height: 75,
  },
  containerB: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    borderRadius:10,
    paddingHorizontal: 10,
    borderColor: '#1D3557',
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  btnsave: {
    backgroundColor:  '#1D3557',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    width: '40%',
    marginHorizontal: 5,
  },
  txtbtnsave: {
    color: '#EFF1ED',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnss:{
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  inputext:{
    width: '92%',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
    color: '#1D3557',
  },
})
