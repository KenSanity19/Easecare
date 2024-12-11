import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, ImageBackground, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import styles from "./styles/bookingStyles";

const BookingScreen = ({ navigation, route }) => {
  const { service, previousServices = [] } = route.params || {};
 
  const [selectedServices, setSelectedServices] = useState(previousServices);
  const [selectedGender, setSelectedGender] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const handleAiderSelection = (gender) => {
    setSelectedGender(gender);
  };

  // Load services if any from route params
  useEffect(() => {
    if (service) {
      setSelectedServices((prevServices) => {
        const updatedServices = [...prevServices, service];
        return Array.from(new Set(updatedServices.map((s) => s.id || s.service_name)))
          .map((key) =>
            updatedServices.find((s) => (s.id || s.service_name) === key)
          );
      });
    }
  }, [service]);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirmDate = (date) => {
    setSelectedDate(date.toISOString().split("T")[0]);
    hideDatePicker();
  };

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);

  const handleConfirmTime = (time) => {
    setSelectedTime(
      time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    hideTimePicker();
  };

  // Fetch user address from Firebase
  const handleBooking = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
  
    if (!user) {
      alert("User is not logged in!");
      return;
    }
  
    const userId = user.uid; // Get logged-in user's ID
    const dbRef = ref(getDatabase());
  
    try {
      // Fetch tbl_customer node
      const snapshot = await get(child(dbRef, "tbl_customer"));
  
      if (snapshot.exists()) {
        const customers = snapshot.val();
  
        // Search for logged-in user's record by UID or email
        let userRecord = customers[userId]; // If keys match UID directly
        if (!userRecord) {
          // Search by email/username
          for (const key in customers) {
            if (customers[key].username === user.email) {
              userRecord = customers[key];
              break;
            }
          }
        }
  
        if (userRecord) {
          const address = userRecord.address;
          navigation.navigate("PaymentScreen", {
            selectedGender,
            selectedServices,
            selectedDate,
            selectedTime,
            location: address,
          });
        } else {
          alert("User data not found!");
        }
      } else {
        alert("No customers found in the database!");
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
      alert("Failed to fetch user data!");
    }
  };
  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>What aider do you prefer?</Text>
      <View style={styles.genderSelector}>
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

        <Text style={styles.orText}>OR</Text>

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

      <View style={styles.separator}></View>

      <View style={styles.bookingDetailsContainer}>
        {selectedServices.length === 0 ? (
          <Text style={styles.noServicesText}>No services selected yet.</Text>
        ) : (
          <FlatList
            data={selectedServices}
            keyExtractor={(item) => item.id?.toString() || item.service_name}
            renderItem={({ item }) => (
              <View style={styles.serviceDetails}>
                <Text style={styles.serviceName}>{item.service_name}</Text>
                <Text style={styles.priceText}>
                  {item.price ? `${item.price}` : "N/A"}
                </Text>
              </View>
            )}
          />
        )}
      </View>

      <View style={styles.dateTimeContainer}>
        <TouchableOpacity onPress={showDatePicker} style={styles.dateInput}>
          <MaterialIcons name="calendar-today" size={20} color="gray" />
          <Text style={styles.dateText}>
            {selectedDate || "Select a Date"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={showTimePicker} style={styles.timeInput}>
          <MaterialIcons name="access-time" size={20} color="gray" />
          <Text style={styles.timeText}>
            {selectedTime || "Select a Time"}
          </Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />

      <TouchableOpacity
        style={styles.bookButton}
        onPress={async () => {
          if (!selectedGender) {
            alert("Please select an aider.");
            return;
          }
          if (selectedServices.length === 0) {
            alert("Please select at least one service.");
            return;
          }
          if (!selectedDate) {
            alert("Please select a date.");
            return;
          }
          if (!selectedTime) {
            alert("Please select a time.");
            return;
          }

          await handleBooking();
        }}
      >
        <Text style={styles.bookButtonText}>BOOK NOW</Text>
      </TouchableOpacity>
      <ImageBackground
        source={require("../assets/images/topImage.png")}
        style={styles.bottomImage}
        resizeMode="cover"
      />
    </ScrollView>
  );
};
 
export default BookingScreen;
