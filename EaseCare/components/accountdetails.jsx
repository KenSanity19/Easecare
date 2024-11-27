import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from "react-native";
import styles from "./styles/accountdetailsStyles";

const AccountDetailsScreen = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Rhealove Ariane M. Balaba",
    contactNumber: "09678256412",
    address: "Zone 9, Cafas, Macanhan, Carmen",
    birthDate: "October 31, 2003",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic here to save changes (e.g., API call)
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account Details</Text>
      </View>
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
          style={styles.input}
          value={formData.address}
          editable={isEditing}
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
  );
};

export default AccountDetailsScreen;
