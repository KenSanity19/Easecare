import React, { useState } from "react";
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
} from "react-native";
import styles from "./styles/changepassStyles";

const ChangePasswordScreen = ({navigation}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
          <Text style={styles.profileName}>Rhealove Ariane M. Balaba</Text>
        </View>

        {/* Password Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            style={styles.input}
            value={currentPassword}
            onChangeText={setCurrentPassword}
            placeholder="Enter current password"
            secureTextEntry={true}
          />

          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="Enter new password"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Re-enter New Password</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Re-enter new password"
            secureTextEntry={true}
          />
        </View>

     {/* Save Button */}
<TouchableOpacity 
  style={styles.saveButton} 
  onPress={() => navigation.navigate("PassSuccessScreen")}
>
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
