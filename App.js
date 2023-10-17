import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { database } from './firebase'; // Adjust the path as needed
import { ref, push, get } from 'firebase/database'; // Import 'get' for reading data
import SignIn from './SignIn'; // Import the SignIn component
import SignUp from './SignUp';

const Home = () => {
    // Home screen content
    return (
      // Your "Welcome to Construction Management App" content
      // ...
      <h1>Welcome to Construction Management App</h1>
    );
  };

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} />
        {<Stack.Screen name="SignIn" component={SignIn} />}
        {<Stack.Screen name="Home" component={Home} />}
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;

