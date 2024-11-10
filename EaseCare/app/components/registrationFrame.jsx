import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/registrationStyle';

const SignUp = ({ navigation }) => {
const [name, setName] = useState('');
const [address, setAddress] = useState('');
const [contact, setContact] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    return (
    <View style={styles.container}>
        <TextInput
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={setName}
        style={styles.input}
        left={<TextInput.Icon icon={() => <Ionicons name="person" size={20} color="#6e6e6e" />} />}/>

        <TextInput
        label="Address"
        mode="outlined"
        value={address} 
        onChangeText={setAddress}
        keyboardType="default" 
        autoCapitalize="none"
        style={styles.input}
        left={<TextInput.Icon icon={() => <Ionicons name="location-outline" size={20} color="#6e6e6e" />} />}/>

        <TextInput
        label="Contact"
        mode="outlined"
        value={contact} 
        onChangeText={setContact}
        keyboardType="default" 
        autoCapitalize="none"
        style={styles.input}
        left={<TextInput.Icon icon={() => <Ionicons name="call-outline" size={20} color="#6e6e6e" />} />}/>

        <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        left={<TextInput.Icon icon={() => <Ionicons name="mail" size={20} color="#6e6e6e" />} />}/>

        <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        left={<TextInput.Icon icon={() => <Ionicons name="lock-closed" size={20} color="#6e6e6e" />} />}/>

        <Button
        mode="contained"
        style={styles.button}
        onPress={() => Alert.alert('Sign Up', 'Registration Success!')}>Sign Up
        </Button>

        <Button
        mode="text"
        style={styles.loginRedirectButton}
        labelStyle={{ color: 'black' }}
        onPress={() => navigation.navigate('LoginScreen')}>Already have an account?
        <Text style={styles.signUpText}> Log In</Text> 
        </Button>
    </View>
    );
};

export default SignUp;
