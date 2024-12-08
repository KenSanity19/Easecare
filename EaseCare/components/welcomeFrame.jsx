import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios'; // Import axios
import styles from './styles/welcomeStyles';

const WelcomeScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleNavigation = async (screen) => {
        setIsLoading(true); // Show loading spinner

        try {
            // Perform a network request using axios with a timeout
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', { timeout: 5000 });
            if (response.status === 200) {
                // If the network request is successful, navigate to the next screen
                navigation.navigate(screen);
            } else {
                // Handle non-200 HTTP responses
                Alert.alert('Error', 'Unable to connect to the server. Please try again later.');
            }
        } catch (error) {
            // Catch network or timeout errors
            if (error.code === 'ECONNABORTED') {
                Alert.alert('Error', 'The request timed out. Please check your internet connection.');
            } else {
                Alert.alert('Error', 'Network request failed. Please check your connection.');
            }
            console.error('Axios Error:', error); // Log detailed error for debugging
        } finally {
            setIsLoading(false); // Hide loading spinner
        }
    };

    return (
        <View style={styles.container}>
            {/* Top Image Background */}
            <ImageBackground
                source={require('../assets/images/topImage.png')}
                style={styles.topImage}
                resizeMode="cover"
            />

            {/* Main Content */}
            <View style={styles.content}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Welcome To</Text>
                    <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                </View>
                <Text style={styles.title}>EASECARE</Text>
                <Text style={styles.subtitle}>"Accessible Home Services for Persons with Special Needs"</Text>

                {/* Show loading spinner or buttons based on isLoading */}
                {isLoading ? (
                    <ActivityIndicator size="large" color="#0000ff" style={styles.loadingSpinner} />
                ) : (
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            style={[styles.button, styles.signUpButton]}
                            onPress={() => handleNavigation('LoginScreen')}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.logInButton]}
                            onPress={() => handleNavigation('SignUp')}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            {/* Bottom Image Background */}
            <ImageBackground
                source={require('../assets/images/bottomImage.png')}
                style={styles.bottomImage}
                resizeMode="cover"
            />
        </View>
    );
};

export default WelcomeScreen;
