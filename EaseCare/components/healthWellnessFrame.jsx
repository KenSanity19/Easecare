import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles/healthWellnessStyle';
import { ref, get } from 'firebase/database';
import { database } from '../app/firebaseConfig';

const HealthWellnessScreen = ({ navigation, route }) => {
    const [services, setServices] = useState([]);
    const { address } = route.params || {}; // Retrieve address from route params

    // Fetch health and wellness services from Firebase
    const fetchServices = async () => {
        try {
            const servicesRef = ref(database, 'tbl_services');
            const snapshot = await get(servicesRef);

            if (snapshot.exists()) {
                const servicesData = snapshot.val();
                const filteredServices = Object.values(servicesData).filter(
                    (service) => service.service_group_id === 4
                );

                setServices(filteredServices);
            } else {
                Alert.alert(
                    'No Services Found',
                    'There are no services available at the moment.'
                );
            }
        } catch (error) {
            console.error('Error fetching services:', error);
            Alert.alert('Error', 'Failed to fetch services. Please try again.');
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
                <Text style={styles.question}>
                    What type of health and wellness service do you like?
                </Text>

                {/* Services Grid */}
                <View style={styles.gridContainer}>
                    {services.slice(0, 4).map((service, index) => (
                        <TouchableOpacity
                            key={service.id || index}
                            style={styles.card}
                            onPress={() =>
                                navigation.navigate("BookingScreen", {
                                    service: service,
                                    address: address, // Pass address to BookingScreen
                                })
                            }
                        >
                            <Text style={styles.cardText}>{service.service_name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Center the last service */}
                {services[4] && (
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <TouchableOpacity
                            key={services[4].id || 4}
                            style={styles.card}
                            onPress={() =>
                                navigation.navigate("BookingScreen", {
                                    service: services[4],
                                    address: address, // Pass address to BookingScreen
                                })
                            }
                        >
                            <Text style={styles.cardText}>{services[4].service_name}</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Logo */}
                <Image
                    source={require('../assets/images/healthWellnessLogo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

export default HealthWellnessScreen;
