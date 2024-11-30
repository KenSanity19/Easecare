import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles/bookingStyles";

const BookingScreen = ({ route, navigation }) => {
  // Ensure service is passed as part of the route params
  const { service } = route.params;

  // Destructure service properties (e.g., service_name, price)
  const { service_name, price } = service || {};

  // Check if service is undefined or missing required properties
  if (!service || !service_name || !price) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Error</Text>
        <Text style={{ color: "red" }}>Service details are missing or incorrect.</Text>
      </View>
    );
  }

  // State to track selected gender for the aider
  const [selectedGender, setSelectedGender] = useState(null);

  const handleAiderSelection = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      {/* Aider Selection Section */}
      <Text style={styles.header}>What aider do you prefer?</Text>
      <View style={styles.genderSelector}>
        {/* Male Aider */}
        <TouchableOpacity
          style={[
            styles.genderOption,
            selectedGender === "Male" && styles.selectedOption,
          ]}
          onPress={() => handleAiderSelection("Male")}
        >
          <Image
            source={require("../assets/images/boy.png")}
            style={styles.aiderImage}
          />
          <Text
            style={[
              styles.genderText,
              selectedGender === "Male" && { color: "orange" },
            ]}
          >
            Male
          </Text>
        </TouchableOpacity>

        {/* Female Aider */}
        <TouchableOpacity
          style={[
            styles.genderOption,
            selectedGender === "Female" && styles.selectedOption,
          ]}
          onPress={() => handleAiderSelection("Female")}
        >
          <Image
            source={require("../assets/images/girl.png")}
            style={styles.aiderImage}
          />
          <Text
            style={[
              styles.genderText,
              selectedGender === "Female" && { color: "orange" },
            ]}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>

      {/* Line Separator */}
      <View style={styles.separator}></View>

      {/* Booking Details Section */}
      <Text style={styles.header}>Booking Details</Text>
      <View style={styles.bookingDetailsContainer}>
        <View style={styles.serviceDetails}>
          <Text style={styles.serviceName}>{service_name}</Text>
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>

      {/* Date and Time Picker */}
      <View style={styles.dateTimePicker}>
        <TouchableOpacity style={styles.dateButton}>
          <Text style={styles.dateButtonText}>Select Date</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateButton}>
          <Text style={styles.dateButtonText}>Select Time</Text>
        </TouchableOpacity>
      </View>

      {/* Book Now Button */}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => alert("Booking Confirmed!")}
      >
        <Text style={styles.bookButtonText}>BOOK NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingScreen;
