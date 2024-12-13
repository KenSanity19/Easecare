import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ref, get, query, orderByChild, equalTo, update } from "firebase/database";
import { database } from "../app/firebaseConfig";
import { getAuth } from "firebase/auth";
import styles from "./styles/accountdetailsStyles";

const AccountDetailsScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    contact: "",
  });
  const [customerId, setCustomerId] = useState(""); // Store the customer ID
  const [loading, setLoading] = useState(true);
  const [editable, setEditable] = useState(false); // Toggle edit mode
  const [contactError, setContactError] = useState(""); // Error message for Contact Number

  // Fetch customer details by email
  const fetchCustomerDetailsByEmail = async () => {
    setLoading(true);
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user || !user.email) {
        throw new Error("User is not logged in or email is not available.");
      }

      const email = user.email; // Get the current user's email
      const customerQuery = query(
        ref(database, "tbl_customer"),
        orderByChild("email"),
        equalTo(email)
      );

      const snapshot = await get(customerQuery);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const customerId = Object.keys(data)[0]; // Get the customer ID
        setCustomerId(customerId);
        setFormData(data[customerId]); // Populate formData with customer details
      } else {
        Alert.alert("No Data", "No customer data found for this email.");
      }
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      Alert.alert("Error", "Unable to fetch customer details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const validateContact = (contact) => {
    if (contact.length === 10 && contact.startsWith("9")) {
      setContactError(""); // Clear error if valid
      return true;
    } else {
      setContactError("Contact number must start with '9' and be 10 digits long.");
      return false;
    }
  };

  const handleSave = async () => {
    if (!validateContact(formData.contact)) {
      Alert.alert("Error", "Please fix the contact number before saving.");
      return;
    }

    try {
      if (!customerId) {
        throw new Error("Customer ID not available.");
      }

      const customerRef = ref(database, `tbl_customer/${customerId}`);
      await update(customerRef, formData); // Update data in the database

      Alert.alert("Success", "Your details have been updated.");
      setEditable(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating data in Firebase:", error);
      Alert.alert("Error", "Unable to save changes. Please try again.");
    }
  };

  useEffect(() => {
    fetchCustomerDetailsByEmail(); // Call the function when the component mounts
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/topImage.png")}
        style={styles.topImage}
        resizeMode="cover"
      />
      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          {/* Editable Fields */}
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            value={formData.firstName}
            editable={editable}
            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
          />

          <Text style={styles.label}>Middle Name</Text>
          <TextInput
            style={styles.input}
            value={formData.middleName}
            editable={editable}
            onChangeText={(text) => setFormData({ ...formData, middleName: text })}
          />

          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={formData.lastName}
            editable={editable}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            value={formData.address}
            editable={editable}
            multiline
            onChangeText={(text) => setFormData({ ...formData, address: text })}
          />

          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            style={styles.input}
            value={formData.contact}
            editable={editable}
            keyboardType="phone-pad"
            onChangeText={(text) => {
              setFormData({ ...formData, contact: text });
              validateContact(text);
            }}
          />
          {contactError ? <Text style={styles.errorText}>{contactError}</Text> : null}

          {/* Edit and Save Buttons */}
          {editable ? (
            <TouchableOpacity
              style={[styles.button, { borderRadius: 8, backgroundColor: "#4CAF50" }]} // Green button when in edit mode
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.button, { borderRadius: 8 }]} // Default button style
              onPress={() => setEditable(true)}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountDetailsScreen;
