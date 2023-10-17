import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { database } from './firebase'; // Adjust the path as needed
import { ref, get, child, } from 'firebase/database';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = async () => {

    // Test  to fetch the data


    // Reference to the "users" collection
    const usersRef = ref(database, 'users');

    // Fetch all user data from the "users" collection
    
      const usersSnapshot = await get(usersRef);

      if (usersSnapshot.exists()) {
        // Convert the user data to an array
        const usersArray = [];
        usersSnapshot.forEach((childSnapshot) => {
          const user = {
            id: childSnapshot.key, // The user's unique ID
            ...childSnapshot.val(), // Other user data (e.g., username, password)
          };
          usersArray.push(childSnapshot.val().username);
        });
        console.log('userArr = ' + usersArray);
      } else {
        // Handle the case where the "users" collection is empty
        console.log('No users found.');
      }



    /*
    // Reference to the user in the Firebase Realtime Database
    const userRef = ref(database, 'users');

    // Check if the user exists in the database
    const userSnapshot = await get(child(userRef, username));
    console.log('user snapshot = ' + userSnapshot);
    console.log('user snapshot val = ' + userSnapshot.val());
    if (userSnapshot.val() !== null) {
      // Get the user's password from the database
      const savedPasswordSnapshot = await get(child(userRef, username, 'password'));

      if (savedPasswordSnapshot.val() !== null && password === savedPasswordSnapshot.val()) {
        // Successful login, navigate to "Home" screen
        navigation.navigate('Home');
      } else {
        // Failed login, show an error message
        alert('Invalid username or password');
      }
    } else {
      // User does not exist in the database
      alert('User not found');
    }
    */

  };

  return (
    <LinearGradient colors={['#3494E6', '#EC6EAD']} style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </LinearGradient>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    color: 'white',
  },
});
