import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./styles/bookingStyles";

const BookingScreen = ({ route, navigation }) => {
  // Destructure service and previousServices from route params
  const { service, previousServices = [] } = route.params || {};

  // State to track selected services
  const [selectedServices, setSelectedServices] = useState(previousServices);

  // State to track selected gender for the aider
  const [selectedGender, setSelectedGender] = useState(null);

  // Function to handle selection of an aider
  const handleAiderSelection = (gender) => {
    setSelectedGender(gender);
  };

  // Add new service to the list when the screen loads
  useEffect(() => {
    if (service) {
      setSelectedServices((prevServices) => {
        // Merge current services with new service, avoiding duplicates
        const updatedServices = [...prevServices, service];
        return Array.from(new Set(updatedServices.map((s) => s.id || s.service_name)))
          .map((key) =>
            updatedServices.find((s) => (s.id || s.service_name) === key)
          );
      });
    }
  }, [service]);
  

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
          <FlatList
            data={selectedServices}
            keyExtractor={(item) => item.id?.toString() || item.service_name}
            renderItem={({ item }) => (
              <View style={styles.serviceDetails}>
                <Text style={styles.serviceName}>{item.service_name}</Text>
                <Text style={styles.priceText}>{item.price || "N/A"}</Text>
              </View>
            )}
          />
      </View>

      {/* ADD MORE Button */}
      <TouchableOpacity
        style={styles.addMoreButton}
        onPress={() =>
          navigation.navigate("ServicesScreen", {
            previousServices: selectedServices, // Pass all currently selected services
          })
        }
      >
        <Text style={styles.addMoreButtonText}>ADD MORE</Text>
      </TouchableOpacity>


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
