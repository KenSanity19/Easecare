import React, { useState } from 'react';
import { View, Image, Alert, TouchableOpacity, Platform } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from './styles/loginStyle';
import HoverableButton from './hoverableButton';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleBiometricsLogin = () => {
        // Implement biometric login logic here
        console.log('Biometric login initiated');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.title}>EASECARE</Text>
            </View>

            <TextInput
                label="Email / Username"
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

            <HoverableButton
                mode="contained"
                style={styles.loginButton}
                labelStyle={styles.loginButtonText}
                onPress={() => navigation.navigate('ServicesScreen')}>Log In
            </HoverableButton>
            <View style={styles.separator} />

            <View style={styles.socialLoginContainer}>
                    <TouchableOpacity onPress={handleBiometricsLogin} style={styles.biometricsButton}>
                        <Text style={styles.biometricLabel}>Login using <Text style={styles.biometricBold}>BIOMETRICS</Text></Text>
                    </TouchableOpacity>
                <Text style={styles.orText}>OR</Text>
                <View style={styles.socialButtonsContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="facebook" size={24} color="#3b5998" />
                        <Text style={styles.socialButtonText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="google" size={24} color="#db4437" />
                        <Text style={styles.socialButtonText}>Google</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Button
                mode="text"
                style={styles.registerButton}
                labelStyle={{ color: 'black' }}
                onPress={() => navigation.navigate('SignUp')}>Don't have an account? <Text style={styles.signUpText}>Sign Up</Text>
            </Button>
        </View>
    );
};

export default LoginScreen;
