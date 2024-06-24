import {Text, TouchableOpacity,StyleSheet,View,TextInput} from 'react-native';
import { useState } from 'react';
import { database, updateDoc, doc } from '../config/firebaseconfig';

export default function AlterarEstoque({navigation, route}) {
    
    const [produtoEdit, setprodutoEdit]  = useState(route.params.nome)
    const [descricaoEdit, setdescricaoEdit] = useState(route.params.descricao)
    const [quantidadeEdit, setquantidadeEdit] = useState(route.params.quantidade)
    const [quantminimaEdit, setquantminimaEdit] = useState(route.params.minimo)
    const [categoriaEdit, setcategoriaEdit] = useState(route.params.categoria)
    const [uriEdit, seturiEdit] = useState(route.params.uri)
    const idTask = route.params.codigo
    
    function editTask(categoria, descricao,minimo,nome,quantidade,uri,codigo){
        const taskdocRef = doc(database, 'Produto', codigo)
        updateDoc(taskdocRef,{
            categoria: categoriaEdit,
            descricao: descricaoEdit,
            minimo: quantminimaEdit,
            nome: produtoEdit,
            quantidade: quantidadeEdit,
            uri: uriEdit,
        })
        navigation.navigate('Estoque')
    }

    return (
    <View style={styles.container}>
        <Text>Task</Text>
        <TextInput style={styles.inputTask} placeholder='Ex Estudar' value={produtoEdit} onChangeText={setprodutoEdit}/>
    <TouchableOpacity style={styles.btnsave} onPress={() => editTask(produtoEdit, idTask)} >
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
});
