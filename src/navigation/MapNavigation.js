import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Map from '../components/Map';

const Stack = createStackNavigator();

const MapNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          title: 'Map',
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

export default MapNavigation;