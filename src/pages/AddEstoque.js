import { Pressable, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ScrollView  } from 'react-native';
import React, {useState, useEffect} from 'react';
import {database, addDoc, collection} from '../config/firebaseconfig';
import {onSnapshot} from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function AddEstoque({navigation}){

  const [newcodigo, setNewcodigo] = useState(0)
  const [newproduto, setNewproduto] = useState(null)
  const [newdescricao, setNewdescricao] = useState(null)
  const [newquantidade, setNewquantidade] = useState(0)
  const [newquantminima, setNewquantminima] = useState(0)
  const [newcategoria, setNewcategoria] = useState(null)
  const [newuri, setNewuri] = useState(null)
  const [task2, setTask2] = useState([])

  useEffect (() => {
    const tasksCollection2 = collection(database, 'Produto')
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
    var bool = "False";
    for (var i = 0; i < task2.length; i++){
      if (task2[i].codigo == newcodigo){
        var bool = "True";}
    }
    if (bool == "False"){
    const taskdocRef = collection(database, 'Produto')
    addDoc(taskdocRef, {
      codigo:   newcodigo,
      categoria: newcategoria,
      descricao: newdescricao,
      minimo: newquantminima,
      nome: newproduto,
      quantidade: newquantidade,
      uri: newuri,
      status: true,
    })
    navigation.navigate('Estoque')
  }
    else{
      alert("Produto já existe");
    }
}
    function deleteTask (id) {
       const taskdocRef = doc(database, 'Produto', id)
        deleteDoc(taskdocRef)
      }

  return(
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
    <View style={styles.topBar}>
    <Pressable onPress={() => navigation.navigate('Estoque')} style={styles.seta}>
       <Ionicons name="chevron-back" size={30} color="white" />
     </Pressable>
        <Text style={styles.txtEstoque}> Produto </Text>
      <Feather name="box" size={60} color="white"  style={styles.icon}/> 
    </View>
    <View style={styles.containerB} >
        <Text style={styles.inputext}> ID produto: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um numero:'
          value={newcodigo}
          onChangeText={setNewcodigo}
          keyboardType="numeric"
        />
        <Text style={styles.inputext}> Nome produto: </Text>
        <TextInput
          style={styles.input}
          placeholder='exemplo Fita isolante'
          value={newproduto}
          onChangeText={setNewproduto}
        />
        <Text style={styles.inputext}> Descrição: </Text>
        <TextInput
          style={styles.input}
          placeholder='exemplo auto colante'
          value={newdescricao}
          onChangeText={setNewdescricao}
        />
        <Text style={styles.inputext}> Categoria: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a categoria:'
          value={newcategoria}
          onChangeText={setNewcategoria}
        />
        <Text style={styles.inputext}> Quantidade: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um numero:'
          value={newquantidade}
          onChangeText={setNewquantidade}
          keyboardType="numeric"
        />
          <Text style={styles.inputext}> Quantidade Mínima: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um numero:'
          value={newquantminima}
          onChangeText={setNewquantminima}
          keyboardType="numeric"
        />
        <Text style={styles.inputext}> uri: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a uri da imagem:'
          value={newuri}
          onChangeText={setNewuri}
        />
        <View style={styles.btnss}>
        <Pressable style={styles.btnsave} 
          onPress={() => {addTask()}} >
          <Text style={styles.txtbtnsave}> Salvar </Text>
        </Pressable>
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
