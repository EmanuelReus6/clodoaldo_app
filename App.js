import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Avisos from './src/pages/Avisos';
import Perfil from './src/pages/Perfil';
import Login from './src/pages/Login';

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
        <Tab.Screen name="Perfil" component={Perfil}/>
        <Tab.Screen name="Avisos" component={Avisos}/>
      </Tab.Navigator>
   
  );
};



export default function App(){

  const Stack = createStackNavigator();

  return(
    <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}}  name='Login' component={Login} />
          <Stack.Screen options={{headerShown:false}} name='Home' component={BottomTab}/> 
        </Stack.Navigator>
    </NavigationContainer>
  );
}