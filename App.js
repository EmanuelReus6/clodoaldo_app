import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Avisos from './src/pages/Avisos';
import Perfil from './src/pages/Perfil';

import { Entypo } from '@expo/vector-icons';

export default function BottomTab(){

    const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
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
            ? 'login'
            : 'login';
          }
          else if (route.name === 'Perfil') {
            iconName = focused 
            ? 'login'
            : 'login';
          }
          return <Entypo name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#a61fab',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Perfil" component={Perfil}/>
        <Tab.Screen name="Avisos" component={Avisos}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};