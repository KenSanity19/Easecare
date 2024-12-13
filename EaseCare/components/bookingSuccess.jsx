import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import styles from './styles/bookingSuccessStyle';

const BookingSuccessScreen = ({ route, navigation }) => {
    const { aider_id, customer_id } = route.params;  // Extract customer_id along with aider_id

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/topImage.png')}
                style={styles.topImage}
                resizeMode="cover"
            />

            <Image
                source={require('../assets/images/Check.png')}
                style={styles.checkImage}
            />

            <Text style={styles.successText}>Booking Success!</Text>
            <Text style={styles.subtitle}>
                Give feedback to the aider to improve our services.
            </Text>
            
            <Button
                mode="contained"
                onPress={() => 
                    navigation.navigate("AiderFeedbackScreen", { aider_id, customer_id })
                }
                style={styles.button}
                labelStyle={styles.buttonText}
            >
                FEEDBACK
            </Button>

            <ImageBackground
                source={require('../assets/images/bottomImage.png')}
                style={styles.bottomImage}
                resizeMode="cover"
            />
        </View>
    );
};

export default BookingSuccessScreen;
