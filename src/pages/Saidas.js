import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Entradas({navigation}) {
    
    return (
        <View style={styles.container}>
          <View style={styles.topBar}>
            <Ionicons name="chevron-back" size={30} color="white" style={styles.seta}
              onPress={() => navigation.navigate('Home')}
            />
              <Text style={styles.txtSaidas}> Saidas </Text>
            <MaterialCommunityIcons name="truck-plus-outline" size={60} color="white"  style={styles.icon}/> 
          </View>

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
  txtSaidas:{
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
