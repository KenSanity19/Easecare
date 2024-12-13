import React, { useState } from 'react';
import { View, Alert, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'; // Import Firebase functions
import styles from './styles/forgotPassStyle';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleResetPassword = async () => {
        if (!email) {
            Alert.alert('Error', 'Please enter your email address.');
            return;
        }

        const auth = getAuth();
        try {
            await sendPasswordResetEmail(auth, email);
            Alert.alert('Success', 'Instructions have been sent to your email.');
            navigation.navigate('LoginScreen'); 
        } catch (error) {
            console.error(error);
            let errorMessage = '';
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = 'The email address is not valid.';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'No user found with this email address.';
                    break;
                default:
                    errorMessage = 'An error occurred. Please try again later.';
                    break;
            }
            Alert.alert('Error', errorMessage);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            </View>

            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.instructions}>Enter your email address below and we'll send you instructions to reset your password.</Text>

            <TextInput
                label="Email"
                mode="outlined"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                left={<TextInput.Icon icon={() => <Ionicons name="mail" size={20} color="#6e6e6e" />} />}
            />

            <Button
                mode="contained"
                style={styles.button}
                onPress={handleResetPassword}
            >
                Reset Password
            </Button>

            <Button
                mode="text"
                style={styles.backToLoginButton}
                labelStyle={{ color: '#D97706', fontSize: 17 }}
                onPress={() => navigation.navigate('LoginScreen')}
            >
                Back to Login
            </Button>
        </View>
    );
};

export default ForgotPasswordScreen;
