import React, { useState } from 'react';
import { View, Image, Alert, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Auth
import styles from './styles/loginStyle';
import HoverableButton from './hoverableButton';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in both email and password.');
            return;
        }
    
        try {
            const auth = getAuth(); // Initialize Firebase Auth
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
    
            Alert.alert('Success', `Welcome back, ${user.email}!`);
            navigation.navigate('ServicesScreen'); // Redirect to the services screen
        } catch (error) {
            console.error(error);
    
            // Map error codes to user-friendly messages
            let errorMessage = '';
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = 'The email address is not valid.';
                    break;
                case 'auth/user-disabled':
                    errorMessage = 'This account has been disabled. Please contact support.';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'No account found with this email. Please sign up first.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Incorrect password. Please try again.';
                    break;
                case 'auth/invalid-credential':
                    errorMessage = 'Invalid login credentials. Please check your email and password.';
                    break;
                default:
                    errorMessage = 'An unknown error occurred. Please try again.';
                    break;
            }
    
            // Show the error message
            Alert.alert('Login Failed', errorMessage);
        }
    };
    

    const handleBiometricsLogin = () => {
        // Biometric login logic placeholder
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
                left={<TextInput.Icon icon={() => <Ionicons name="mail" size={20} color="#6e6e6e" />} />}
            />

            <TextInput
                label="Password"
                mode="outlined"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                left={<TextInput.Icon icon={() => <Ionicons name="lock-closed" size={20} color="#6e6e6e" />} />}
            />

            <Button
                mode="text"
                style={styles.forgotPasswordButton}
                labelStyle={styles.forgotPasswordLabel}
                onPress={() => navigation.navigate('ForgotPasswordScreen')}
            >
                Forgot Password?
            </Button>

            <HoverableButton
                mode="contained"
                style={styles.loginButton}
                labelStyle={styles.loginButtonText}
                onPress={handleLogin}
            >
                Log In
            </HoverableButton>

            <View style={styles.separator} />

            <View style={styles.socialLoginContainer}>
                <TouchableOpacity onPress={handleBiometricsLogin} style={styles.biometricsButton}>
                    <Text style={styles.biometricLabel}>
                        Login using <Text style={styles.biometricBold}>BIOMETRICS</Text>
                    </Text>
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
                onPress={() => navigation.navigate('SignUp')}
            >
                Don't have an account? <Text style={styles.signUpText}>Sign Up</Text>
            </Button>
        </View>
    );
};

export default LoginScreen;
