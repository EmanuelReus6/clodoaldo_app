import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function Login({navigation}) {
    
    return (
        <View style={styles.container}>
        <View style={styles.topBar}>
            <Text style={styles.txtLogin}> Login </Text>
        </View>
        
            <TouchableOpacity style={styles.container}
              onPress={() => navigation.navigate('Home')}
            >
              <Text>aaaaaa</Text>
            </TouchableOpacity>
        <View style={styles.bottomBar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  topBar:{
    backgroundColor: '#093f88',
    width: 350,
    height: 80,
    top: 50
  },
  bottomBar:{
    backgroundColor: '#093f88',
    width: 370,
    height: 80,
    top: 650,
    borderRadius: 20
  },
  txtLogin: {
    color: '#fff',
    textAlign: 'center'
  }
});
