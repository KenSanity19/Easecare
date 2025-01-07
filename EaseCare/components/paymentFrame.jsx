import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image, ImageBackground, Alert } from 'react-native';
import styles from './styles/paymentStyles';
import { getDatabase, ref, push, get, child, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const PaymentScreen = ({ navigation, route }) => {
    const [currentMethod, setCurrentMethod] = useState('Cash Payment');
    const [isLoading, setIsLoading] = useState(false);
    const [customerId, setCustomerId] = useState('');
    const [serviceId, setServiceId] = useState('');
    const [aiderId, setAiderId] = useState(null); // State for the aider_id

    const {
        selectedGender = '',
        selectedService = null, // Single service selected
        selectedDate = '',
        selectedTime = '',
        location = '',
        aider_id = null, // Assuming aider_id is passed in route.params
    } = route?.params || {}; // Use optional chaining to prevent undefined errors

    // Define payment methods array
    const paymentMethods = [
        { id: 'gcash', name: 'GCash', logo: require('../assets/images/gcash.png') },
        { id: 'paypal', name: 'PayPal', logo: require('../assets/images/paypal.png') },
        { id: 'cash', name: 'Cash Payment', logo: require('../assets/images/cash1.png') },
    ];

    // Fetch customer ID from the database
    useEffect(() => {
        const fetchCustomerId = async () => {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) {
                Alert.alert('Error', 'User is not logged in!');
                return;
            }

            const userEmail = user.email;
            const dbRef = ref(getDatabase());

            try {
                const snapshot = await get(child(dbRef, 'tbl_customer'));

                if (snapshot.exists()) {
                    const customers = snapshot.val();
                    const userEntry = Object.entries(customers).find(
                        ([, customer]) => customer.email === userEmail
                    );

                    if (userEntry) {
                        const [id] = userEntry;
                        setCustomerId(id);
                    } else {
                        Alert.alert('Error', 'User data not found in the database!');
                    }
                } else {
                    Alert.alert('Error', 'No customer data found in the database!');
                }
            } catch (error) {
                console.error('Error fetching customer ID:', error);
                Alert.alert('Error', 'Failed to fetch customer data!');
            }
        };

        fetchCustomerId();
    }, []);

    // Fetch service ID from the database based on the selected service name
    useEffect(() => {
        const fetchServiceId = async () => {
            if (!selectedService || !selectedService.service_name) {
                Alert.alert('Error', 'Selected service is invalid!');
                return;
            }

            const dbRef = ref(getDatabase());

            try {
                const snapshot = await get(child(dbRef, 'tbl_services'));

                if (snapshot.exists()) {
                    const services = snapshot.val();
                    const serviceEntry = Object.entries(services).find(
                        ([, service]) => service.service_name === selectedService.service_name
                    );

                    if (serviceEntry) {
                        const [id] = serviceEntry;
                        setServiceId(id);
                    } else {
                        Alert.alert('Error', 'Selected service not found in the database!');
                    }
                } else {
                    Alert.alert('Error', 'No services found in the database!');
                }
            } catch (error) {
                console.error('Error fetching service ID:', error);
                Alert.alert('Error', 'Failed to fetch service data!');
            }
        };

        fetchServiceId();
    }, [selectedService]);

    // Handle payment method selection
    const handleSelect = (methodName) => {
        setCurrentMethod(methodName);
    };

    // Save booking data to the database
    const saveBookingToDatabase = async () => {
        if (!serviceId) {
            throw new Error('Service ID is not available.');
        }

        try {
            const db = getDatabase();
            db.persistenceEnabled = true;
            const bookingsRef = ref(db, 'tbl_booking');

            // Fetch existing bookings to determine the next key
            const snapshot = await get(bookingsRef);

            let newKey = 'B1'; // Default key if no bookings exist
            if (snapshot.exists()) {
                const bookings = snapshot.val();
                const keys = Object.keys(bookings).filter(key => key.startsWith('B'));
                const numericKeys = keys.map(key => parseInt(key.substring(1), 10));
                const maxKey = Math.max(...numericKeys);
                newKey = `B${maxKey + 1}`; // Generate the next key
            }

            const bookingData = {
                booking_date: selectedDate,
                booking_time: selectedTime,
                status: 'Pending',
                location: location,
                admin_id: null,
                customer_id: customerId,
                service_id: serviceId, // Save the service_id instead of service_name
                aider_id: aider_id || null, // Save aider_id (if available)
            };

            // Save the booking with the generated key
            const newBookingRef = ref(db, `tbl_booking/${newKey}`);
            await set(newBookingRef, bookingData);

            console.log('Booking saved successfully with key:', newKey);
        } catch (error) {
            console.error('Error saving booking:', error);
            throw error;
        }
    };

    // Handle payment confirmation
    const handleConfirmPayment = async () => {
        setIsLoading(true);

        try {
            await saveBookingToDatabase();
            navigation.navigate('BookingConfirmedScreen', {
                selectedGender,
                selectedDate,
                selectedTime,
                location,
                modeOfPayment: currentMethod,
                serviceName: selectedService?.service_name || "Not selected", // Pass service_name
            });
        } catch (error) {
            console.error('Payment confirmation error:', error);
            Alert.alert('Error', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Fallback for when paymentMethods is not available (ensuring we don't call .map on undefined)
    if (!Array.isArray(paymentMethods) || paymentMethods.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Error: Payment methods not available</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/topImage.png')}
                style={styles.topImage}
                resizeMode="cover"
            />
            <Text style={styles.header}>Choose payment method</Text>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loadingSpinner} />
            ) : (
                <>
                    <View style={styles.paymentList}>
                        {paymentMethods.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                style={[styles.paymentMethod, currentMethod === item.name && styles.selectedMethod]}
                                onPress={() => handleSelect(item.name)}
                            >
                                <Image source={item.logo} style={styles.paymentLogoImage} />
                                <View style={styles.paymentDetails}>
                                    <Text style={styles.paymentName}>{item.name}</Text>
                                </View>
                                {currentMethod === item.name && <Text style={styles.selectedIcon}>✔</Text>}
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.selectButton} onPress={handleConfirmPayment}>
                        <Text style={styles.selectButtonText}>SELECT</Text>
                    </TouchableOpacity>
                </>
            )}
            <ImageBackground
                source={require('../assets/images/bottomImage.png')}
                style={styles.bottomImage}
                resizeMode="cover"
            />
        </View>
    );
};

export default PaymentScreen;
