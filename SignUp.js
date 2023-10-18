import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { database } from './firebase1'; // Adjust the path as needed
import { ref, push, get } from 'firebase/database'; // Import 'get' for reading data



const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usersRef = ref(database, 'users');
    const userCountRef = ref(database, 'userCount'); // Reference to keep track of user count

    const handleSignUp = async () => {
        /*
        // Get the current user count
        const userCountSnapshot = await get(userCountRef);
        const userCount = userCountSnapshot.val() || 0;

        // Generate the numeric user ID
        const numericUserID = userCount + 1;

        // Update the user count for the next user
        await push(userCountRef, userCount + 1);

        // Store user data in the Firebase Realtime Database using the numericUserID
        const newUserRef = ref(usersRef, String(numericUserID)); // Convert to string
        */
        await push(usersRef, {
        username: username,
        password: password,
        });

        // console.log('Numeric User ID:', numericUserID);
        console.log('Username:', username);
        console.log('Password:', password);
        // Clear the input fields
        setUsername('');
        setPassword('');
    };
    return (
        <LinearGradient
        colors={['#3494E6', '#EC6EAD']}
        style={styles.container}
        >
        <Text style={styles.header}>Sign Up</Text>
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
        <Button title="Sign Up" onPress={handleSignUp} />
            
        <Text style={styles.switchText}>
        Already a user? 
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>Login</Text>
            </View>
        </TouchableOpacity>
        </Text>

    </LinearGradient>
  );
};



export default SignUp;


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