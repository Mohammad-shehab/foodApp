import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Menu from '../../screens/Menu';
import React from 'react';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ 
          title: 'Discover Restaurants',
          headerStyle: {
            backgroundColor: '#d63384',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center', // Center the title
        }}
      />
      <Stack.Screen 
        name="Menu" 
        component={Menu} 
        options={{ 
          title: 'Menu',
          headerStyle: {
            backgroundColor: '#d63384',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center', 
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;