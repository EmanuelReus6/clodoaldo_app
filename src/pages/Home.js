import {View, SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';


// aaaaaaaaaaaaaaa
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.bola}><Text style={styles.texto1}>Bem vindo!</Text></View>
            <TouchableOpacity style={styles.btnestoque}
                onPress={() => navigation.navigate('Estoque')}
            >
                <Feather name="box" size={50} color="white"  style={styles.icone}/><Text style={styles.textbotao}>Estoque</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnfornecedores} 
                onPress={() => navigation.navigate('Fornecedor')}
            >
                <Octicons name="people" size={50} color="white" style={styles.icone}/><Text style={styles.textbotao}>Fornecedores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnentradas}
                onPress={() => navigation.navigate('Entradas')}
            >
                <MaterialCommunityIcons name="truck-plus-outline" size={50} color="white" style={styles.icone} /><Text style={styles.textbotao}>Entradas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnsaidas}
                onPress={() => navigation.navigate('Saidas')}
            >
                <MaterialCommunityIcons name="truck-minus-outline" size={50} color="white" style={styles.icone} /><Text style={styles.textbotao}>Saidas</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    textbotao:{
        bottom:30,
        marginLeft:100,
        color: '#ffffff',
        fontSize:20,
    },
    icone:{
        top:10,
        marginLeft:15,
    },

    btnestoque:{
        borderRadius:10,
        backgroundColor: '#093f88',
        width:260,
        height:70,
        marginLeft:50,
        bottom:70,
    },
    btnfornecedores:{
        borderRadius:10,
        backgroundColor: '#093f88',
        width:260,
        height:70,
        marginLeft:50,
        bottom:50,
    },
    btnentradas:{
        borderRadius:10,
        backgroundColor: '#093f88',
        width:260,
        height:70,
        marginLeft:50,
        bottom:30,
    },
    btnsaidas:{
        borderRadius:10,
        backgroundColor: '#093f88',
        width:260,
        height:70,
        marginLeft:50,
        bottom:10,
    },
    texto1:{
      color: '#FFFFFF',
      fontSize:35,  
      top: 115,
      marginLeft:25,
    },
    bola:{
        backgroundColor: '#093f88',
        borderRadius: 200,
        height:290,
        width:290,
        alignItems: 'center',
        bottom: 90,
        marginLeft: -50,


    },    
    


})

