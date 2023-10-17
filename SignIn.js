import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { database } from './firebase1'; // Adjust the path as needed
import { ref, get, child } from 'firebase/database';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading
  const navigation = useNavigation();

  const handleSignIn = async () => {
    setLoading(true); // Start loading

    // Reference to the "users" collection
    const usersRef = ref(database, 'users');

    // Fetch all user data from the "users" reference
    const usersSnapshot = await get(usersRef);

    if (usersSnapshot.exists()) {
      let found = false;

      usersSnapshot.forEach((childSnapshot) => {
        if (childSnapshot.val().username === username && 
          childSnapshot.val().password === password) {
          found = true;
        }
      });

      if (found) {
        // Simulate a delay to show loading
        await setTimeout(() => {
          setLoading(false); // Stop loading
          navigation.navigate('Home');
        }, 2000); // Adjust the delay as needed
      } else {
        setLoading(false); // Stop loading
        alert('Incorrect username or password!!!');
      }
    } else {
      setLoading(false); // Stop loading
      console.log('No users found.');
    }
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

      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={styles.switchText}>
          Don't have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>Register</Text>
          </TouchableOpacity>
        </Text>
      )}

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
    borderRadius: 10,
    maxWidth: 300,
  },
  switchText: {
    color: 'white',
  },
});
