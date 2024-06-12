import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Estoque({navigation}) {
    
    return (
        <View style={styles.container}>
          <View style={styles.topBar}>
            <Ionicons name="chevron-back" size={30} color="white" style={styles.seta}
              onPress={() => navigation.navigate('Home')}
            />
              <Text style={styles.txtEstoque}> Estoque </Text>
            <Feather name="box" size={60} color="white"  style={styles.icon}/> 
          </View>
          <TouchableOpacity style={styles.btnNewTask} onPress={() => navigation.navigate('NewTask')}>
          <Text style={styles.txtbtnNewTask}> + </Text>
        </TouchableOpacity>
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
  btnNewTask:{
    backgroundColor: '#093f88',
    justifyContent: 'center',
    alignItems: 'center', 
    height: 60,
    width: 60,
    borderRadius: 50,
    bottom: 30,
    marginLeft: 20,
    position: 'absolute'
    
  },
  txtbtnNewTask:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
    paddingBottom: 5
  }
});
