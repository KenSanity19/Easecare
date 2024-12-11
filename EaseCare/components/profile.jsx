import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import styles from "./styles/profileStyles";

const ProfileScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    disabilityType: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        Alert.alert("Error", "User is not logged in!");
        return;
      }

      const userEmail = user.email; // Get the logged-in user's email
      const dbRef = ref(getDatabase());

      try {
        const snapshot = await get(child(dbRef, "tbl_customer"));

        if (snapshot.exists()) {
          const customers = snapshot.val();

          // Find the user record matching the email
          const userRecord = Object.values(customers).find(
            (customer) => customer.username === userEmail
          );

          if (userRecord) {
            setUserDetails({
              firstName: userRecord.firstName || "",
              middleName: userRecord.middleName || "",
              lastName: userRecord.lastName || "",
              disabilityType: userRecord.disabilityType || "Not Specified",
            });
          } else {
            Alert.alert("Error", "User data not found in the database!");
          }
        } else {
          Alert.alert("Error", "No customer data found in the database!");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
        Alert.alert("Error", "Failed to fetch user data!");
      }
    };

    fetchUserDetails();
  }, []);

  const { firstName, middleName, lastName, disabilityType } = userDetails;

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://via.placeholder.com/100", // Replace with user image URL
          }}
        />
        <Text style={styles.userName}>
          {`${firstName} ${middleName} ${lastName}`.trim() || "Loading..."}
        </Text>
        <Text style={styles.condition}>
          {disabilityType || "Loading..."}
        </Text>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate("SettingsScreen")} // Navigate to SettingsScreen
        >
          <Text style={styles.settingsText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            source={require("../assets/icons/home.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("ServicesScreen")}
        >
          <Image
            source={require("../assets/icons/services.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("NotificationScreen")}
        >
          <Image
            source={require("../assets/icons/notifications.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <Image
            source={require("../assets/icons/profile.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
