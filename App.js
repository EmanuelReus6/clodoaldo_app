import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Avisos from './src/pages/Avisos';
import Perfil from './src/pages/Perfil';
import Login from './src/pages/Login';
import Fornecedor from './src/pages/Fornecedor';
import NovoUsuario from './src/pages/NovoUsuario';
import Estoque from './src/pages/Estoque';
import Entradas from './src/pages/Entradas';
import Saidas from './src/pages/Saidas';
import AddEstoque from './src/pages/AddEstoque';
import AddFornecedor from './src/pages/AddForncedor';
import AddEntrada from './src/pages/AddEntrada';
import AlterarEstoque from './src/pages/AlterarEstoque';
import AlterarFornecedor from './src/pages/AlterarFornecedor';
import AddSaida from './src/pages/AddSaida';
import RelacaodeUsuario from './src/pages/RelacaodeUsuario';
import AlterarUsuario from './src/pages/AlterarUsuario';
import AddUsuario from './src/pages/AddUsuario';

import { Ionicons } from '@expo/vector-icons';

function BottomTab(){

    const Tab = createBottomTabNavigator();

  return(
 
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
      
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } 
          else if (route.name === 'Avisos') {
            iconName = focused 
            ? 'warning'
            : 'warning';
          }
          else if (route.name === 'Perfil') {
            iconName = focused 
            ? 'person'
            : 'person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#093f88',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen options={{headerShown:false}} name="Home" component={Home}/>
        <Tab.Screen options={{headerShown:false}} name="Avisos" component={Avisos}/>
        <Tab.Screen options={{headerShown:false}} name="Perfil" component={Perfil}/>
      </Tab.Navigator>
   
  );
};



export default function App(){

  const Stack = createStackNavigator();

  return(
    <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name='Login' component={Login} />
          <Stack.Screen options={{headerShown:false}} name='Home' component={BottomTab}/> 
          <Stack.Screen options={{headerShown:false}} name='Estoque' component={Estoque}/> 
          <Stack.Screen options={{headerShown:false}} name='Fornecedor' component={Fornecedor}/> 
          <Stack.Screen options={{headerShown:false}} name='Entradas' component={Entradas}/> 
          <Stack.Screen options={{headerShown:false}} name='NovoUsuario' component={NovoUsuario}/> 
          <Stack.Screen options={{headerShown:false}} name='Saidas' component={Saidas}/> 
          <Stack.Screen options={{headerShown:false}} name='AddEstoque' component={AddEstoque}/> 
          <Stack.Screen options={{headerShown:false}} name='AddFornecedor' component={AddFornecedor}/> 
          <Stack.Screen options={{headerShown:false}} name='AddEntrada' component={AddEntrada}/> 
          <Stack.Screen options={{headerShown:false}} name='AlterarEstoque' component={AlterarEstoque}/> 
          <Stack.Screen options={{headerShown:false}} name='AlterarFornecedor' component={AlterarFornecedor}/>
          <Stack.Screen options={{headerShown:false}} name='AddSaida' component={AddSaida}/> 
          <Stack.Screen options={{headerShown:false}} name='RelacaodeUsuario' component={RelacaodeUsuario}/>
          <Stack.Screen options={{headerShown:false}} name='AlterarUsuario' component={AlterarUsuario}/>
          <Stack.Screen options={{headerShown:false}} name='AddUsuario' component={AddUsuario}/>            
        </Stack.Navigator>
    </NavigationContainer>
  );
}