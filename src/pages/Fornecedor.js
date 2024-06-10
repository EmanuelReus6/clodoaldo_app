import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Fornecedor({navigation}) {
    
    return (
        <View style={styles.container}>
        <View style={styles.topBar}>
          <Ionicons name="chevron-back" size={24} color="black" style={styles.seta}
            onPress={() => navigation.navigate('Home')}
          />
            <Text style={styles.txtFornecedor}> Fornecedor </Text>

            
        </View>
        
        <View style={styles.bottomBar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center'
  },
  seta:{
    color: '#fff',
    flex: 1,
    position: 'absolute',
    paddingLeft: 30,
    paddingBottom: 10
  },
  topBar:{
    backgroundColor: '#093f88',
    borderRadius: 20,
    justifyContent: 'space-around',
    width: 350,
    height: 80,
    top: 50,
  },
  bottomBar:{
    backgroundColor: '#093f88',
    width: 370,
    height: 80,
    top: 650,
    borderRadius: 20
  },
  txtFornecedor:{
    color: '#fff',
    textAlign: 'center',
  }
});
