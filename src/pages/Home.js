import {View, SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.bola}><Text style={styles.texto1} >Bem vindo, Usuario!</Text></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
        bottom: 235,
        marginRight: "35%"


    },    
    


})

