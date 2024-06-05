import { TouchableOpacity, StyleSheet, Text, View, FlatList } from 'react-native';

export default function Perfil({navigation}) {
    
    return (
        <View style={styles.container}>
        <View style={styles.topBar}>
            <Text style={styles.txtTask}> Tarefas </Text>
        </View>
        
            <Text> Perfil </Text>
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
  }
});
