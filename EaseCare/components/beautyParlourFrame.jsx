import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles/beautyParlourStyle';
import { ref, get } from 'firebase/database';
import { database } from '../app/firebaseConfig'; 

const BeautyParlourScreen = ({ navigation }) => {
    const [services, setServices] = useState([]);

    // Function to fetch services with service_group_id = 2 from Firebase
    const fetchServices = async () => {
        try {
            const servicesRef = ref(database, 'tbl_services');
            const snapshot = await get(servicesRef);

            if (snapshot.exists()) {
                const servicesData = snapshot.val();
                
                // Filter services with service_group_id = 2
                const filteredServices = Object.values(servicesData).filter(service => service.service_group_id === 2);

                // Update the state with filtered services
                setServices(filteredServices);
            } else {
                Alert.alert("No Services Found", "There are no services available at the moment.");
            }
        } catch (error) {
            console.error("Error fetching services:", error);
            Alert.alert("Error", "Failed to fetch services. Please try again.");
        }
    };

    // Fetch services when the component mounts
    useEffect(() => {
        fetchServices();
    }, []);

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
                    {services.map((service) => (
                        <TouchableOpacity
                            key={service.id}
                            style={styles.card}
                            onPress={() => navigation.navigate('BookingFrame', { service })}>
                            <Text style={styles.cardText}>{service.service_name}</Text>
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
