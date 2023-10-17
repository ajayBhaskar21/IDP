import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Handle the sign-up logic here (e.g., send data to a server).
        // You can add validation, API calls, or database interactions as needed.
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

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.switchText}>Already a user? Login</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Handle the sign-in logic here (e.g., authenticate user).
        // You can add validation, API calls, or database interactions as needed.
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

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignUp">
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

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
    switchText: {
        color: 'white',
    },
});
