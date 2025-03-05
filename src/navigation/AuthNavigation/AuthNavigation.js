import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import Profile from '../../screens/Auth/Profile';
import Welcome from '../../screens/Welcome';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ 
          title: 'Welcome',
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
        name="Login" 
        component={Login} 
        options={{ 
          title: 'Login',
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
        name="Register" 
        component={Register} 
        options={{ 
          title: 'Register',
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
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={({ navigation }) => ({
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#ff69b4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Ionicons name="log-out-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({
  headerLink: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 10,
  },
});