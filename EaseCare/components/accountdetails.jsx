import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Alert,
  ImageBackground,
} from "react-native";
import { ref, get, set } from "firebase/database";
import { database } from "../app/firebaseConfig";
import { getAuth } from "firebase/auth"; // Added for user authentication
import styles from "./styles/accountdetailsStyles";

const AccountDetailsScreen = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    address: "",
    birthDate: "",
  });
  const [loading, setLoading] = useState(true);

  // Fetch customer details from Firebase
  const fetchCustomerDetails = async () => {
    setLoading(true);
    try {
      const auth = getAuth(); // Get Firebase Auth instance
      const userId = auth.currentUser ? auth.currentUser.uid : null;

      if (!userId) {
        throw new Error("User is not logged in.");
      }

      const customerRef = ref(database, `customers/${userId}`);
      const snapshot = await get(customerRef);

      if (snapshot.exists()) {
        setFormData(snapshot.val());
      } else {
        Alert.alert("No Data", "No customer data found for this user.");
      }
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
      Alert.alert("Error", "Unable to fetch customer details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const auth = getAuth();
      const userId = auth.currentUser ? auth.currentUser.uid : null;

      if (!userId) {
        throw new Error("User is not logged in.");
      }

      const customerRef = ref(database, `customers/${userId}`);
      await set(customerRef, formData); // Save updated details to Firebase
      Alert.alert("Success", "Details updated successfully!");
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      Alert.alert("Error", "Failed to update details. Please try again.");
    } finally {
      setIsEditing(false);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  useEffect(() => {
    fetchCustomerDetails();
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
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={formData.name}
            editable={isEditing}
            onChangeText={(text) => handleInputChange("name", text)}
          />
          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            style={styles.input}
            value={formData.contactNumber}
            editable={isEditing}
            keyboardType="phone-pad"
            onChangeText={(text) => handleInputChange("contactNumber", text)}
          />
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={[styles.input, { height: isEditing ? 80 : 40 }]}
            value={formData.address}
            editable={isEditing}
            multiline
            onChangeText={(text) => handleInputChange("address", text)}
          />
          <Text style={styles.label}>Birth Date</Text>
          <TextInput
            style={styles.input}
            value={formData.birthDate}
            editable={isEditing}
            onChangeText={(text) => handleInputChange("birthDate", text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={isEditing ? handleSave : handleEditToggle}
          >
            <Text style={styles.buttonText}>{isEditing ? "SAVE" : "EDIT"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountDetailsScreen;
