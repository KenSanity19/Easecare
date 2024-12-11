import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/bookingConfirmedStyles";

const BookingConfirmedScreen = ({ route }) => {
    const navigation = useNavigation();
    const {
        selectedGender,
        selectedServices,
        selectedDate,
        selectedTime,
        location,
        modeOfPayment,
    } = route.params || {};

    return (
        <View style={styles.container}>
            <View style={styles.confirmationHeader}>
                <Image
                    source={require("../assets/images/Check.png")}
                    style={styles.confirmationIcon}
                />
                <Text style={styles.headerText}>BOOKING CONFIRMED</Text>
                <Text style={styles.subHeaderText}>
                    Your appointment has been successfully booked.
                </Text>
                <Text style={styles.subHeaderText}>Here are the details of your appointment:</Text>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.detailText}>
                    <Text style={styles.detailLabel}>Date:</Text> {selectedDate || "Not selected"}
                </Text>
                <Text style={styles.detailText}>
                    <Text style={styles.detailLabel}>Time:</Text> {selectedTime || "Not selected"}
                </Text>
                <Text style={styles.detailText}>
                    <Text style={styles.detailLabel}>Location:</Text> {location || "Not provided"}
                </Text>
                <Text style={styles.detailText}>
                    <Text style={styles.detailLabel}>Service:</Text> {selectedServices.map(service => service.service_name).join(", ") || "Not selected"}
                </Text>
                <Text style={styles.detailText}>
                    <Text style={styles.detailLabel}>Gender Preference:</Text> {selectedGender || "Not selected"}
                </Text>
                <Text style={styles.detailText}>
                    <Text style={styles.detailLabel}>Mode of Payment:</Text> {modeOfPayment || "Not selected"}
                </Text>
            </View>

            <View style={styles.footerContainer}>
                <Text style={styles.thankYouText}>Thank you for choosing our services.</Text>
                <Image
                    source={require("../assets/images/logo.png")}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>
                    "Accessible Home Services for Persons with Special Needs"
                </Text>
                <TouchableOpacity
                    style={styles.viewProfileButton}
                    onPress={() => navigation.navigate("AiderScreen", { selectedServices, selectedGender })}
                >
                    <Text style={styles.buttonText}>VIEW AIDER PROFILE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BookingConfirmedScreen;
