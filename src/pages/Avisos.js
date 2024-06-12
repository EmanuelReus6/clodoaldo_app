import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Entradas({navigation}) {
    
    return (
        <View style={styles.container}>
          <View style={styles.topBar}>
              <Text style={styles.txtAvisos}> Avisoss </Text>
              <Ionicons name="warning" size={60} color="white" style={styles.icon}/> 
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
});
