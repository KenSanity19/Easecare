import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles/welcomeStyles';

const WelcomeScreen = ({ navigation }) => {
    return (

        
        <View style={styles.container}>
            {/* Top Image Background */}
            <ImageBackground
                source={require('../assets/images/topImage.png')}
                style={styles.topImage}
                resizeMode="cover"/>

            {/* Main Content */}
            <View style={styles.content}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Welcome To</Text>
                    <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                </View>
                <Text style={styles.title}>EASECARE</Text>
                <Text style={styles.subtitle}>"Accessible Home Services for Persons with Special Needs"</Text>
                
                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        style={[styles.button, styles.signUpButton]}
                        onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.logInButton]}
                        onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Bottom Image Background */}
            <ImageBackground
                source={require('../assets/images/bottomImage.png')}
                style={styles.bottomImage}
                resizeMode="cover"/>
        </View>
    );
};

export default WelcomeScreen;
