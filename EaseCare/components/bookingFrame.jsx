import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles/bookingStyles";

const BookingScreen = ({ route }) => {
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

  return (
    <View style={styles.container}>
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
        onPress={() => {
          if (!selectedGender) {
            alert("Please select an aider.");
            return;
          }
          if (selectedServices.length === 0) {
            alert("Please select at least one service.");
            return;
          }
          alert("Booking Confirmed!");
        }}
      >
        <Text style={styles.bookButtonText}>BOOK NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingScreen;
