import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import styles from './styles/paymentStyles';

const PaymentScreen = ({ navigation, route }) => {
    const [currentMethod, setCurrentMethod] = useState('Cash Payment');
    const [isLoading, setIsLoading] = useState(false); // Loading state

    // Extract booking details from route params
    const {
        selectedGender,
        selectedServices,
        selectedDate,
        selectedTime,
        location,
    } = route.params;

    // Payment methods data with image sources
    const paymentMethods = [
        { id: 'gcash', name: 'GCash', logo: require('../assets/images/gcash.png') },
        { id: 'paypal', name: 'PayPal',  logo: require('../assets/images/paypal.png') },
        { id: 'cash', name: 'Cash Payment', logo: require('../assets/images/cash1.png') }, // Placeholder logo for cash
    ];

    const handleSelect = (methodName) => {
        setCurrentMethod(methodName);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.paymentMethod,
                currentMethod === item.name && styles.selectedMethod,
            ]}
            onPress={() => handleSelect(item.name)}
        >
            {/* Payment method logo */}
            <Image source={item.logo} style={styles.paymentLogoImage} />
            <View style={styles.paymentDetails}>
                <Text style={styles.paymentName}>{item.name}</Text>
                {item.detail ? <Text style={styles.paymentDetail}>{item.detail}</Text> : null}
            </View>
            {currentMethod === item.name && <Text style={styles.selectedIcon}>✔</Text>}
        </TouchableOpacity>
    );

    const handleConfirmPayment = async () => {
        setIsLoading(true); // Show loading spinner
        try {
            // Simulate a network request delay
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Navigate to BookingConfirmedScreen with all necessary parameters
            navigation.navigate('BookingConfirmedScreen', {
                selectedGender,
                selectedServices,
                selectedDate,
                selectedTime,
                location,
                modeOfPayment: currentMethod, // Pass selected mode of payment
            });
        } catch (error) {
            console.error('Payment confirmation error:', error);
        } finally {
            setIsLoading(false); // Hide loading spinner
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Payment Method</Text>
            <Text style={styles.subHeader}>Choose payment method</Text>

            {/* Show loading spinner or FlatList based on isLoading */}
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loadingSpinner} />
            ) : (
                <>
                    <FlatList
                        data={paymentMethods}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        style={styles.paymentList}
                    />
                    <TouchableOpacity style={styles.selectButton} onPress={handleConfirmPayment}>
                        <Text style={styles.selectButtonText}>SELECT</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

export default PaymentScreen;
