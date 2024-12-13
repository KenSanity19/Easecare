import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; 
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import { getDatabase, ref, get, child } from "firebase/database";
import { auth } from "../app/firebaseConfig"; // Import your Firebase config
import styles from "./styles/changepassStyles";

const ChangePasswordScreen = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [customerName, setCustomerName] = useState("Loading...");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const user = auth.currentUser;

        if (!user) {
          Alert.alert("Error", "User is not logged in!");
          return;
        }

        const email = user.email;
        const dbRef = ref(getDatabase());
        const customerSnapshot = await get(child(dbRef, "tbl_customer"));

        if (customerSnapshot.exists()) {
          let name = "Unknown User";

          customerSnapshot.forEach((childSnapshot) => {
            const customerData = childSnapshot.val();
            if (customerData.email === email) {
              name = `${customerData.firstName || ""} ${
                customerData.middleName || ""
              } ${customerData.lastName || ""}`.trim();
            }
          });

          setCustomerName(name);
        } else {
          Alert.alert("Error", "Customer data not found in the database!");
        }
      } catch (error) {
        console.error("Error fetching customer details:", error);
        Alert.alert("Error", "Failed to fetch customer details!");
      }
    };

    fetchCustomerDetails();
  }, []);

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "New passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
      return;
    }

    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, currentPassword);

      // Re-authenticate the user
      await reauthenticateWithCredential(user, credential);

      // Update the password
      await updatePassword(user, newPassword);
      Alert.alert("Success", "Your password has been updated.");
      navigation.navigate("PassSuccessScreen");
    } catch (error) {
      console.error("Password update error:", error);
      let errorMessage = "An error occurred. Please try again.";
      if (error.code === "auth/wrong-password") {
        errorMessage = "The current password is incorrect.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "The new password is too weak.";
      } else if (error.code === "auth/requires-recent-login") {
        errorMessage = "Please log in again to update your password.";
      }
      Alert.alert("Error", errorMessage);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/100" }} // Replace with actual profile image URL
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{customerName}</Text>
        </View>

        {/* Password Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            style={styles.input}
            value={currentPassword}
            onChangeText={setCurrentPassword}
            placeholder="Enter current password"
            secureTextEntry
          />

          <Text style={styles.label}>New Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter new password"
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={styles.iconContainer}
            >
              <Icon
                name={isPasswordVisible ? "visibility" : "visibility-off"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Re-enter New Password</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Re-enter new password"
            secureTextEntry
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleChangePassword}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>

        {/* Decorative Bottom Image */}
        <ImageBackground
          source={require("../assets/images/topImage.png")}
          style={styles.bottomImage}
          resizeMode="cover"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ChangePasswordScreen;
