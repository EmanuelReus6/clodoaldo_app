import {Text, TouchableOpacity, StyleSheet, View, TextInput} from 'react-native';
import { useState } from 'react';
import { database, updateDoc, doc } from '../config/firebaseconfig';


export default function AlterarUsuario({navigation, route}) {

    const [nomeEdit, setNomeEdit]  = useState(route.params.nome)
    const [emailEdit, setEmailEdit] = useState(route.params.email)
    const [papelEdit, setpapelEdit] = useState(route.params.papel)
    const [senhaEdit, setsenhaEdit] = useState(route.params.senha)
    const [uriEdit, seturiEdit] = useState(route.params.uri)
    const idTask = route.params.id

    function editTask(nome, email, papel, senha, uri,id){
        const taskdocRef = doc(database, 'Usuario', id)
        updateDoc(taskdocRef,{
            nome: nomeEdit,
            email: emailEdit,
            papel: papelEdit,
            senha: senhaEdit,
            uri: uriEdit,
        })
        navigation.navigate('RelacaodeUsuario')
    }

    return (
    <View style={styles.container}>
        <Text>Alterar Usuario</Text>
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
            placeholder='papel'
            placeholderTextColor={'#8b8b8c'} 
            value={papelEdit} 
            onChangeText={setpapelEdit}
        />
        <TextInput style={styles.inputTask} 
            placeholder='senha' 
            placeholderTextColor={'#8b8b8c'}
            value={senhaEdit}
            onChangeText={setsenhaEdit}
        />
        <TextInput style={styles.inputTask} 
            placeholder='imagem' 
            placeholderTextColor={'#8b8b8c'}
            value={uriEdit}
            onChangeText={seturiEdit}
        />
    <TouchableOpacity style={styles.btnsave} onPress={() => editTask(nomeEdit, emailEdit, papelEdit, senhaEdit, uriEdit, idTask)} >
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
