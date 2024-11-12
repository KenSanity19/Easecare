import React, { useState } from 'react';
import { View, Alert, ImageBackground } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import HoverableButton from './hoverableButton';
import styles from '../styles/signUpNxtStyle';

const AccountDetailsScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        Alert.alert('Registration', 'Account created successfully!');
    };

    return (
        <View style={styles.container}>

             {/* Top Image Background */}
            <ImageBackground
                source={require('./assets/topImage.png')}
                style={styles.topImage}
                resizeMode="cover"/>

            <Text style={styles.sectionHeader}>Account Details:</Text>

            <TextInput
                label="Username"
                mode="outlined"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                left={<TextInput.Icon icon={() => <Ionicons name="person" size={20} color="#6e6e6e" />} />}
            />

            <TextInput
                label="Password"
                mode="outlined"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                left={<TextInput.Icon icon={() => <MaterialIcons name="lock" size={20} color="#6e6e6e" />} />}
            />

            <HoverableButton
                mode="contained"
                style={styles.registerButton}
                labelStyle={styles.registerButtonText}
                onPress={handleRegister}>Register
            </HoverableButton>

            <Button
                mode="text"
                style={styles.loginRedirectButton}
                labelStyle={{ color: 'black' }}
                onPress={() => navigation.navigate('LoginScreen')}>
                Already have an account? <Text style={styles.signUpText}>Login</Text>
            </Button>

            {/* Bottom Image Background */}
            <ImageBackground
                source={require('./assets/bottomImage.png')}
                style={styles.bottomImage}
                resizeMode="cover"/>
        </View>
    );
};

export default AccountDetailsScreen;
