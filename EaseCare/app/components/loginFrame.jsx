import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/loginStyle';

const LoginScreen = ({ navigation }) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image
            source={require('./assets/logo.png')}style={styles.logo}/>
        <Text style={styles.title}>EASECARE</Text>
        </View>

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
        mode="text"
        style={styles.forgotPasswordButton}
        labelStyle={styles.forgotPasswordLabel}
        onPress={() => navigation.navigate('ForgotPasswordScreen')}>Forgot Password?
        </Button>
        
        <Button
        mode="contained"
        style={styles.loginButton}
        onPress={() => Alert.alert('Log In', 'Success!')}>Log In
        </Button>

        <Button
        mode="text"
        style={styles.registerButton}
        labelStyle={{ color: 'black' }}
        onPress={() => navigation.navigate('SignUp')}>Don't have an account? 
        <Text style={styles.signUpText}> Sign Up</Text> 
        </Button>
    </View>
    );
};

export default LoginScreen;
