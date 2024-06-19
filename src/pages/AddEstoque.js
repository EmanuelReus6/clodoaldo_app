import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import {database, addDoc, collection} from '../../config/firebaseconfig';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function AddEstoque({navigation}){

  const [newcodigo, setNewcodigo] = useState(null)
  const [newproduto, setNewproduto] = useState(null)
  const [newdescricao, setNewdescricao] = useState(null)
  const [newquantidade, setNewquantidade] = useState(null)
  const [newquantminima, setNewquantminima] = useState(null)
  const [newcategoria, setNewcategoria] = useState(null)

  function addTask(){
    const taskdocRef = collection(database, 'Produto')
    addDoc(taskdocRef, {
      codigo:   newcodigo,
      categoria: newcategoria,
      descricao: newdescricao,
      minimo: newquantminima,
      nome: newproduto,
      quantidade: newquantidade,
      status: true,
    })
    navigation.navigate('Estoque')
}
    function deleteTask (id) {
       const taskdocRef = doc(database, 'Produto', id)
        deleteDoc(taskdocRef)
      }

  return(
    <View style={styles.container}>
    <View style={styles.topBar}>
      <Ionicons name="chevron-back" size={30} color="white" style={styles.seta}
        onPress={() => navigation.navigate('Home')}
      />
        <Text style={styles.txtEstoque}> ADD Estoque </Text>
      <Feather name="box" size={60} color="white"  style={styles.icon}/> 
    </View>
    <View style={styles.containerB} >
        <Text style={styles.title}> Estoque </Text>
        <Text> ID produto: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um numero:'
          value={newcodigo}
          onChangeText={setNewcodigo}
        />
        <Text> Nome produto: </Text>
        <TextInput
          style={styles.input}
          placeholder='exemplo Fita isolante'
          value={newproduto}
          onChangeText={setNewproduto}
        />
        <Text> Descrição: </Text>
        <TextInput
          style={styles.input}
          placeholder='exemplo auto colante'
          value={newdescricao}
          onChangeText={setNewdescricao}
        />
        <Text> Quantidade: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um numero:'
          value={newquantidade}
          onChangeText={setNewquantidade}
        />
          <Text> Quantidade Mínima: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite um numero:'
          value={newquantminima}
          onChangeText={setNewquantminima}
        />
        <Text> Quantidade Categoria: </Text>
        <TextInput
          style={styles.input}
          placeholder='Digite a categoria:'
          value={newcategoria}
          onChangeText={setNewcategoria}
        />
        <View style={styles.btnss}>
        <TouchableOpacity style={styles.btnsave} 
          onPress={() => {addTask()}} >
          <Text style={styles.txtbtnsave}> Salvar </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => { deleteTask(item.id) }} style={styles.btnsave}>
        <Text style={styles.txtbtnsave}> excluir </Text>
        </TouchableOpacity>
        </View>
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
  containerB: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#457B9D'
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#F1FAEE'
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
    color: '#EFF1ED'
  },
  btnsave: {
    backgroundColor:  '#1D3557',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    width: '50%',
  },
  txtbtnsave: {
    color: '#EFF1ED',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnss:{
    flex: 1,
    justifyContent: "space-between"
  },
})
