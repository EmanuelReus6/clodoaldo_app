import {Text, TouchableOpacity,StyleSheet,View,TextInput} from 'react-native';
import { useState } from 'react';
import { database, updateDoc, doc } from '../config/firebaseconfig';

export default function AlterarEstoque({navigation, route}) {
    
    const [nomeEdit, setNomeEdit]  = useState(route.params.nome)
    const [descricaoEdit, setDescricaoEdit] = useState(route.params.descricao)
    const [categoriaEdit, setCategoriaEdit] = useState(route.params.categoria)
    const [quantidadeEdit, setQuantidadeEdit] = useState(route.params.quantidade)
    const [quantminimaEdit, setQuantminimaEdit] = useState(route.params.minimo)
    const [uriEdit, setUriEdit] = useState(route.params.uri)
    const idTask = route.params.id
    
    function editTask(nome, descricao, categoria, minimo, uri,id){
        const taskdocRef = doc(database, 'Produto', id)
        updateDoc(taskdocRef,{
            nome: nomeEdit,
            descricao: descricaoEdit,
            categoria: categoriaEdit,
            quantidade: quantidadeEdit,
            minimo: quantminimaEdit,
            uri: uriEdit,
        })
        navigation.navigate('Estoque')
    }

    return (
    <View style={styles.container}>
        <Text>Task</Text>
        <TextInput style={styles.inputTask} 
            placeholder='Nome'
            placeholderTextColor={'#8b8b8c'}
            value={nomeEdit}
            onChangeText={setNomeEdit}
        />
        <TextInput style={styles.inputTask} 
            placeholder='Descrição'
            placeholderTextColor={'#8b8b8c'}
            value={descricaoEdit}
            onChangeText={setDescricaoEdit}
        />
        <TextInput style={styles.inputTask} 
            placeholder='Categoria'
            placeholderTextColor={'#8b8b8c'}
            value={categoriaEdit}
            onChangeText={setCategoriaEdit}
        />
        <TextInput style={styles.inputTask} 
            placeholder='Quantidade'
            placeholderTextColor={'#8b8b8c'}
            value={quantidadeEdit}
            onChangeText={setQuantidadeEdit}
        />
        <TextInput style={styles.inputTask} 
            placeholder='Quantidade Mínima'
            placeholderTextColor={'#8b8b8c'}
            value={quantminimaEdit}
            onChangeText={setQuantminimaEdit}
        />
        <TextInput style={styles.inputTask} 
            placeholder='Imagem'
            placeholderTextColor={'#8b8b8c'}
            value={uriEdit}
            onChangeText={setUriEdit}
        />
        <TouchableOpacity style={styles.btnsave} onPress={() => editTask(nomeEdit, descricaoEdit, categoriaEdit, quantidadeEdit, quantminimaEdit, uriEdit, idTask)} >
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
