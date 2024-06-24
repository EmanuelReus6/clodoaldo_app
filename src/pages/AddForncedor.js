import { Pressable, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ScrollView  } from 'react-native';
import React, {useState} from 'react';
import {database, addDoc, collection} from '../../config/firebaseconfig';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function AddFornecedor({navigation}){

  const [newcodigo, setNewcodigo] = useState(0)
  const [newproduto, setNewproduto] = useState(null)
  const [newdescricao, setNewdescricao] = useState(null)
  const [newquantidade, setNewquantidade] = useState(0)
  const [newquantminima, setNewquantminima] = useState(0)
  const [newcategoria, setNewcategoria] = useState(null)

  function addTask(){
    const taskdocRef = collection(database, 'Fornecedor')
    addDoc(taskdocRef, {
      codigo:   newcodigo,
      categoria: newcategoria,
      descricao: newdescricao,
      minimo: newquantminima,
      nome: newproduto,
      quantidade: newquantidade,
      status: true,
    })
    navigation.navigate('Fornecedor')
}
    function deleteTask (id) {
       const taskdocRef = doc(database, 'Fornecedor', id)
        deleteDoc(taskdocRef)
      }

  return(
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
    <View style={styles.topBar}>
    <Pressable onPress={() => navigation.navigate('Fornecedor')} style={styles.seta}>
       <Ionicons name="chevron-back" size={30} color="white" />
     </Pressable>
        <Text style={styles.txtEstoque}> Fornecedor </Text>
        <Octicons name="people" size={60} color="white" style={styles.icon}/> 
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
        <Text style={styles.inputext}> Nome: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite nome:'
          value={newproduto}
          onChangeText={setNewproduto}
        />
        <Text style={styles.inputext}> Email: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite email:'
          value={newproduto}
          onChangeText={setNewproduto}
        />
        <Text style={styles.inputext}> Endereço: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite endereço:'
          value={newdescricao}
          onChangeText={setNewdescricao}
        />
        <Text style={styles.inputext}> Telefone: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite telefone:'
          value={newcategoria}
          onChangeText={setNewcategoria}
        />
        <View style={styles.btnss}>
        <Pressable style={styles.btnsave} 
          onPress={() => {addTask()}} >
          <Text style={styles.txtbtnsave}> Salvar </Text>
        </Pressable>
        
        <Pressable onPress={() => { deleteTask(item.id) }} style={styles.btnsave}>
        <Text style={styles.txtbtnsave}> excluir </Text>
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
