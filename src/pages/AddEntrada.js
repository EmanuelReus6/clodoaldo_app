import { Pressable, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ScrollView  } from 'react-native';
import React, {useState, useEffect} from 'react';
import {database, addDoc, collection, doc, updateDoc} from '../config/firebaseconfig';
import {onSnapshot} from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function AddEntrada({navigation}){
  const [task2, setTask2] = useState([])
  const [newcodigo, setNewcodigo] = useState(0)
  const [newcodfornecedor, setNewcodfornecedor] = useState(0)
  const [newcodproduto, setNewcodproduto] = useState(0)
  const [newdescricao, setNewdescricao] = useState(null)
  const [newquantidade, setNewquantidade] = useState(0)


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
    const taskdocRef = collection(database, 'Entrada')
    addDoc(taskdocRef, {
      codigo:   newcodigo,
      codfornecedor: newcodfornecedor,
      codproduto: newcodproduto,
      descricao: newdescricao,
      quantidade: newquantidade,
      status: true,
    })
    navigation.navigate('Entradas')
}

  function addverificado (){
    for (var i = 0; i < task2.length; i++){
      if (task2[i].codigo == newcodproduto){
          var quantnum = parseInt(task2[i].quantidade);
          var quantnumnew = parseInt(newquantidade);
          var quant = quantnum + quantnumnew;
          if (task2[i].codigo == newcodproduto){
          const taskdocRef = doc(database, 'Produto', task2[i].id)
        updateDoc(taskdocRef,{
            quantidade: quant 
          })
        addTask() }
        else{
            alert("Produto não existe");
        }
      }
    }
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
        <Text style={styles.inputext}> Codigo: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um numero:'
          value={newcodigo}
          onChangeText={setNewcodigo}
          keyboardType="numeric"
        />
        <Text style={styles.inputext}> Codigo Fornecedor: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um numero'
          value={newcodfornecedor}
          onChangeText={setNewcodfornecedor}
          keyboardType="numeric"
        />
        <Text style={styles.inputext}> Codigo Produto: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um numero'
          value={newcodproduto}
          onChangeText={setNewcodproduto}
          keyboardType="numeric"

        />
        <Text style={styles.inputext}> Descrição: </Text>
        <TextInput
          style={styles.input}
          placeholder='Fita'
          value={newdescricao}
          onChangeText={setNewdescricao}
        />
        <Text style={styles.inputext}> Quantidade: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um numero:'
          value={newquantidade}
          onChangeText={setNewquantidade}
          keyboardType="numeric"
        />

        <View style={styles.btnss}>
        <Pressable style={styles.btnsave} 
          onPress={() => {addverificado()}} >
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
