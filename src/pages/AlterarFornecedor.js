import {Text, TouchableOpacity, StyleSheet, View, TextInput} from 'react-native';
import { useState } from 'react';
import { database, updateDoc, doc } from '../config/firebaseconfig';


export default function AlterarFornecedor({navigation, route}) {
    
    const [nomeEdit, setNomeEdit]  = useState(route.params.nome)
    const [emailEdit, setEmailEdit] = useState(route.params.email)
    const [enderecoEdit, setEnderecoEdit] = useState(route.params.endereco)
    const [telefoneEdit, setTelefoneEdit] = useState(route.params.telefone)
    const idTask = route.params.id
    
    function editTask(nome, email, endereco, telefone, id){
        const taskdocRef = doc(database, 'Fornecedor', id)
        updateDoc(taskdocRef,{
            nome: nomeEdit,
            email: emailEdit,
            endereco: enderecoEdit,
            telefone: telefoneEdit,
        })
        navigation.navigate('Fornecedor')
    }

    return (
    <View style={styles.container}>
        <Text>Alterar Fornecedor</Text>
        <TextInput style={styles.inputTask} 
            placeholder='Nome' 
            placeholderTextColor={'#8b8b8c'}
            value={nomeEdit} 
            onChangeText={setNomeEdit} 
        />
        <TextInput style={styles.inputTask} 
            placeholder='Email' 
            placeholderTextColor={'#8b8b8c'}
            value={emailEdit} 
            onChangeText={setEmailEdit}
        />
        <TextInput
            style={styles.inputTask} 
            placeholder='Endereço'
            placeholderTextColor={'#8b8b8c'} 
            value={enderecoEdit} 
            onChangeText={setEnderecoEdit}
        />
        <TextInput style={styles.inputTask} 
            placeholder='Telefone' 
            placeholderTextColor={'#8b8b8c'}
            value={telefoneEdit}
            onChangeText={setTelefoneEdit}
        />
    <TouchableOpacity style={styles.btnsave} onPress={() => editTask(nomeEdit, emailEdit, enderecoEdit, telefoneEdit, idTask)} >
        <Text style={styles.btntxtsave}>Save</Text>
    </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff1ed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputTask:{
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

    btnsave:{
        backgroundColor:  '#1D3557',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        width: '40%',
        marginHorizontal: 5,
    },
    btntxtsave:{
        color: '#EFF1ED',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
