import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles/beautyParlourStyle';

const BeautyParlourScreen = ({ navigation }) => {
    const treatments = [
        "Hair Cuts and Styling",
        "Eyebrow and Eyelash Services",
        "Hair Washing",
        "Scalp Treatments",
        "Skin Care and Make up",
        "Waxing",
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
                <Text style={styles.question}>What type of beauty treatments do you like?</Text>

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
                    source={require('../assets/images/beautyParlourLogo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

export default BeautyParlourScreen;
