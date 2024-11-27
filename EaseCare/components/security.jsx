import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Switch,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles/securityStyles";

const SecurityScreen = ({ navigation }) => {
  const [isBiometricEnabled, setBiometricEnabled] = useState(false);
  const [isTwoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <View style={styles.container}>
      {/* Change Password */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("AccountDetails")}
      >
        <FontAwesome name="user-circle" size={24} color="#f57c00" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Change Password</Text>
          <Text style={styles.subtitle}>
            Update your current password to ensure your account remains secure.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Biometric Authentication */}
      <View style={styles.item}>
        <MaterialIcons name="fingerprint" size={24} color="#2196f3" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Biometric Authentication</Text>
          <Text style={styles.subtitle}>
            Use your device's biometric for a quick and secure login.
          </Text>
        </View>
        <Switch
          value={isBiometricEnabled}
          onValueChange={(value) => setBiometricEnabled(value)}
        />
      </View>

      {/* Two-Factor Authentication */}
      <View style={styles.item}>
        <MaterialIcons name="lock-outline" size={24} color="#ffc107" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Two-Factor Authentication</Text>
          <Text style={styles.subtitle}>
            Enhance the security of your account by requiring a second verification.
          </Text>
        </View>
        <Switch
          value={isTwoFactorEnabled}
          onValueChange={(value) => setTwoFactorEnabled(value)}
        />
      </View>

      {/* Decorative Bottom Image */}
      <ImageBackground
        source={require("../assets/images/topImage.png")}
        style={styles.bottomImage}
        resizeMode="cover"
      />
    </View> 
  );
};

export default SecurityScreen;
