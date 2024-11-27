import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles/settingsStyles";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Account Details */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("AccountDetails")}
      >
        <FontAwesome name="user-circle" size={24} color="#f57c00" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Account Details</Text>
          <Text style={styles.subtitle}>
            View your account information, personal details, and contact
            information.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Security */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("SecurityScreen")}
      >
        <MaterialIcons name="security" size={24} color="#2196f3" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Security</Text>
          <Text style={styles.subtitle}>
            Access your privacy, password management, and security settings.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Feedback */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Feedback")}>
        <MaterialIcons name="feedback" size={24} color="#ffc107" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Feedback</Text>
          <Text style={styles.subtitle}>
            Send feedback or report issues related to the app.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity
  
        style={styles.item}
        onPress={() => {
            console.log("Logout pressed");
            navigation.navigate("LoginScreen"); // Navigate to Feedback
        }}
        >
        <MaterialIcons name="logout" size={24} color="#03a9f4" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Logout</Text>
        </View>
      </TouchableOpacity>

      {/* Decorative Bottom Image */}
      <ImageBackground
        source={require("../assets/images/topImage.png")}
        style={styles.bottomImage}
        resizeMode="cover"
      />
    </View>
  );
};

export default SettingsScreen;
