import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/bookingConfirmedStyles";

const BookingConfirmedScreen = ({ route }) => {
    const navigation = useNavigation();
    const {
        selectedGender,
        selectedDate,
        selectedTime,
        location,
        modeOfPayment,
        serviceName = "Not selected", // Accept serviceName from route params
    } = route.params || {}; // Destructure with fallback for params

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
                    <Text style={styles.detailLabel}>Service:</Text> {serviceName}
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
                <View style={styles.headerWithText}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                    />
                    <Text style={styles.easeCareText}>EaseCare</Text>
                </View>
                <Text style={styles.tagline}>
                    "Accessible Home Services for Persons with Special Needs"
                </Text>
                <TouchableOpacity
                    style={styles.viewProfileButton}
                    onPress={() => navigation.navigate("AiderScreen", { serviceName, selectedGender })}
                >
                    <Text style={styles.buttonText}>VIEW AIDER PROFILE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BookingConfirmedScreen;
