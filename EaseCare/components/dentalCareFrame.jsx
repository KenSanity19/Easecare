import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './styles/dentalCareStyle';
import { ref, set, push } from 'firebase/database';
import { database } from '../app/firebaseConfig'; 


const DentalCareScreen = ({ navigation }) => {
    const treatments = [
        "Dental Implants",
        "Dentures",
        "Root Canal",
        "Veneers",
        "Tooth Extraction",
        "Teeth Whitening",
        "Fillings and Restoration",
        "Dental Cleaning and Polishing",
    ];


    return (
        <View style={styles.container}>
            {/* Left Background Image */}
            <Image
                source={require('../assets/images/servicesLeft.png')}
                style={styles.leftImage}
                resizeMode="cover"
            />

            {/* Right Background Image */}
            <Image
                source={require('../assets/images/servicesRight.png')}
                style={styles.rightImage}
                resizeMode="cover"
            />

            {/* Content */}
            <View>
                {/* Question */}
                <Text style={styles.question}>What type of dental treatments do you like?</Text>

                {/* Services Grid */}
                <View style={styles.gridContainer}>
                    {treatments.map((treatment, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.card}
                            onPress={() => navigation.navigate('BookingFrame', { treatment })}>
                        <Text style={styles.cardText}>{treatment}</Text>
                    </TouchableOpacity>
                    ))}
                </View>

                {/* Logo */}
                <Image
                    source={require('../assets/images/dentalCareLogo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

export default DentalCareScreen;
