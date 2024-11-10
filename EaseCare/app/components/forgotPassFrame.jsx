import React, { useState } from 'react';
import { View, Alert, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/forgotPassStyle';

const ForgotPasswordScreen = ({ navigation }) => {
const [email, setEmail] = useState('');

    return (  
        <View style={styles.container}>

        <View style={styles.logoContainer}>
            <Image
            source={require('./assets/logo.png')}style={styles.logo}/>
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
            left={<TextInput.Icon icon={() => <Ionicons name="mail" size={20} color="#6e6e6e" />} />}/>

        <Button
            mode="contained"
            style={styles.button}
            onPress={() => Alert.alert('Instructions was sent to the email you provided.')}>Reset Password
        </Button>

        <Button
            mode="text"
            style={styles.backToLoginButton}
            labelStyle={{ color: '#D97706' }}
            onPress={() => navigation.navigate('LoginScreen')}>Back to Login
        </Button>
        </View>
    );
};

export default ForgotPasswordScreen;
