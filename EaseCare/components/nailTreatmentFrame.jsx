import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles/nailTreatmentStyle';

const NailTreatmentScreen = ({ navigation }) => {
    const treatments = [
        "Manicure",
        "Pedicure",
        "Nail Extensions",
        "Nail Repairs",
        "Cuticle Care",
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
                <Text style={styles.question}>What type of nail treatment do you like?</Text>

                {/* Services Grid */}
                <View style={styles.gridContainer}>
                    {treatments.slice(0, 4).map((treatment, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.card}
                            onPress={() => navigation.navigate('BookingFrame', { treatment })}>
                            <Text style={styles.cardText}>{treatment}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Center the Cuticle Care */}
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity
                        style={[styles.card, { width: '60%' }]} 
                        onPress={() => navigation.navigate('BookingFrame', { treatment: treatments[4] })}>
                        <Text style={styles.cardText}>{treatments[4]}</Text>
                    </TouchableOpacity>
                </View>

                {/* Logo */}
                <Image
                    source={require('../assets/images/nailTreatmentLogo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

export default NailTreatmentScreen;
