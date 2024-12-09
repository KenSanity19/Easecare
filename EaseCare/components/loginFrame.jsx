import React, { useState, useEffect } from 'react';
import { View, Image, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text, TextInput, Button, Checkbox } from 'react-native-paper';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../app/firebaseConfig';
import * as Facebook from 'expo-facebook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/loginStyle';
import HoverableButton from './hoverableButton';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Load saved credentials on component mount
    useEffect(() => {
        const loadCredentials = async () => {
            try {
                const savedEmail = await AsyncStorage.getItem('savedEmail');
                const savedPassword = await AsyncStorage.getItem('savedPassword');

                if (savedEmail && savedPassword) {
                    setEmail(savedEmail);
                    setPassword(savedPassword);
                    setRememberMe(true);
                }
            } catch (error) {
                console.error('Failed to load saved credentials:', error);
            }
        };

        loadCredentials();
    }, []);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in both email and password.');
            return;
        }

        setIsLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save credentials if "Remember Me" is checked
            if (rememberMe) {
                await AsyncStorage.setItem('savedEmail', email);
                await AsyncStorage.setItem('savedPassword', password);
            } else {
                await AsyncStorage.removeItem('savedEmail');
                await AsyncStorage.removeItem('savedPassword');
            }

            Alert.alert('Success', `Welcome back, ${user.email}!`);
            navigation.navigate('ServicesScreen');
        } catch (error) {
            console.error(error);

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
                default:
                    errorMessage = 'An unknown error occurred. Please try again.';
                    break;
            }

            Alert.alert('Login Failed', errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFacebookLogin = async () => {
        setIsLoading(true);
        try {
            await Facebook.initializeAsync({
                appId: '935984145151270',
            });

            const { type, token } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email'],
            });

            if (type === 'success') {
                console.log('Facebook login successful, token:', token);
                Alert.alert('Success', 'Facebook login successful');
                navigation.navigate('ServicesScreen');
            } else {
                Alert.alert('Login Failed', 'Facebook login was cancelled.');
            }
        } catch (error) {
            console.error('Facebook Login Error:', error);
            Alert.alert('Login Failed', 'There was an issue with Facebook login.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleBiometricsLogin = () => {
        console.log('Biometric login initiated');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.title}>EASECARE</Text>
            </View>

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loadingSpinner} />
            ) : (
                <>
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

                    <View style={styles.rememberMeForgotPasswordContainer}>
                        <View style={styles.rememberMeContainer}>
                            <Checkbox
                                status={rememberMe ? 'checked' : 'unchecked'}
                                onPress={() => setRememberMe(!rememberMe)}
                            />
                            <Text style={styles.rememberMeText}>Remember Me</Text>
                        </View>

                        <Button
                            mode="text"
                            style={styles.forgotPasswordButton}
                            labelStyle={styles.forgotPasswordLabel}
                            onPress={() => navigation.navigate('ForgotPasswordScreen')}
                        >
                            Forgot Password?
                        </Button>
                    </View>


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
                            <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
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
                </>
            )}
        </View>
    );
};

export default LoginScreen;
