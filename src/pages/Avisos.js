import { StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import { database, doc} from '../../config/firebaseconfig';
import { onSnapshot, collection } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Entradas({navigation}) {
    
  const [task, setTask] = useState([])
  
  useEffect (() => {
    const tasksCollection = collection(database, 'Produto')
    const listen = onSnapshot(tasksCollection, (query) => {
      const list = []
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id})
      })
      setTask(list)
    })
    return ()  => listen();
  }, [])

  function tipoaviso(quantidade, minimo, nome){
    if (quantidade < minimo && quantidade > 0){
      return( 
        <View style={styles.avisoA}>
          <AntDesign name="exclamationcircleo" size={40} color="black" style={styles.icone}/>
          <Text style={styles.textoA}>{nome} esta com quantidade abaixo do minimo</Text> 
        </View>
      );
    }
    if (quantidade <= 0){
        return( 
          <View style={styles.avisoV}>
            <AntDesign name="warning" size={40} color="black" style={styles.icone}/>  
            <Text style={styles.textoA}>Nao ha mais {nome} no estoque</Text>
          </View>
        );
    }
  }

    return (
        <View style={styles.container}>
          <View style={styles.topBar}>
          <Ionicons name="chevron-back" size={30} color="white" style={styles.seta} onPress={() => navigation.navigate('Home')}/>
              <Text style={styles.txtAvisos}> Avisos </Text>

          </View>
        
                  <View style={styles.containerB}>
                  <FlatList
                    data={task}
                    renderItem={({item}) => {
                      if (item.quantidade < item.minimo){
                      return(
                        <View style={styles.viewav}>
                          {tipoaviso(item.quantidade, item.minimo, item.nome)}
                        
                        </View>
                      )}
                    }}
                  />
                    </View>
                    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  txtAvisos:{
    color: '#fff',
    textAlign: 'center',
  },
  topBar:{
    backgroundColor: '#093f88',
    justifyContent: 'space-around',
    width: 390,
    height: 80,
    top: 50,
  },
  containerB:{
    flex: 1,
    top: 80,
    height:500,
  },

  txtitem:{
    color: 'white',
    fontSize:12,
    marginLeft:97,
    top: 13,

  },
  tasks:{
    backgroundColor: '#093f88',
    marginLeft:12,
    width: 290,
    height: 75,
    borderRadius: 10,
  },
  lixo:{
    marginLeft: 311,
    backgroundColor: '#093f88',
    bottom: 74,
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avisoA:{
    top: 5,
    backgroundColor: 'yellow',
    marginLeft:35,
    width: 290,
    height: 75,
    borderRadius: 10,
  },
  avisoV:{
    top: 5,
    backgroundColor: 'red',
    marginLeft:35,
    width: 290,
    height: 75,
    borderRadius: 10,
  },
  viewav:{
    height: 100,
  },
  textoA:{
    color: 'black',
    fontSize:12,
    marginLeft:75,
    top: -20,
  },
  icone:{
    marginLeft: 20,
    top:18,
  },
  seta:{
    flex: 1,
    position: 'absolute',
    paddingLeft: 30,
    top: 25
  },
});
