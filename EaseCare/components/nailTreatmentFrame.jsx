import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles/nailTreatmentStyle';
import { ref, get } from 'firebase/database';
import { database } from '../app/firebaseConfig';

const NailTreatmentScreen = ({ navigation, route }) => {
    const [services, setServices] = useState([]);

    // Fetch nail treatment services from Firebase
    const fetchServices = async () => {
        try {
            const servicesRef = ref(database, 'tbl_services');
            const snapshot = await get(servicesRef);

            if (snapshot.exists()) {
                const servicesData = snapshot.val();
                const filteredServices = Object.values(servicesData).filter(
                    (service) => service.service_group_id === 3
                );

                setServices(filteredServices);
            } else {
                Alert.alert('No Services Found', 'There are no services available at the moment.');
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
                <Text style={styles.question}>What type of nail treatment do you like?</Text>

                {/* Services Grid */}
                <View style={styles.gridContainer}>
                    {services.slice(0, 4).map((service, index) => (
                        <TouchableOpacity
                            key={service.id || index}
                            style={styles.card}
                            onPress={() =>
                                navigation.navigate("BookingScreen", {
                                    service: service,
                                    previousServices: route.params?.previousServices || [],
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
                            key={services[4].id || 4} // Use services[4] to display the last service
                            style={styles.card}
                            onPress={() =>
                                navigation.navigate("BookingScreen", {
                                    service: services[4], // Pass the correct service
                                    previousServices: route.params?.previousServices || [],
                                })
                            }
                        >
                            <Text style={styles.cardText}>{services[4].service_name}</Text>
                        </TouchableOpacity>
                    </View>
                )}

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
