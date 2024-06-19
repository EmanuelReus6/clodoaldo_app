import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import {database, addDoc, collection} from '../../config/firebaseconfig';


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
    <View style={styles.container} >
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
        <TouchableOpacity style={styles.btnsave} 
          onPress={() => {addTask()}}
        >
          <Text style={styles.txtbtnsave}> Salvar </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  }
})
