import React from "react";
import {View, Text, TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import styles from "./styles/profileStyles";
const ProfileScreen = ({ navigation }) => {
  const bookings = [
    { time: "10:00am", service: "Lip Blushing", date: "October 6, 2024" },
    { time: "1:00pm", service: "Tooth Extraction", date: "September 20, 2024" },
    { time: "4:30pm", service: "Basic Manicure", date: "September 1, 2024" },
    { time: "1:00pm", service: "Brow Lamination", date: "February 10, 2024" },
  ];

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
        <Text style={styles.userName}>Rhealove Ariane M. Balaba</Text>
        <Text style={styles.condition}>
          Attention-deficit/Hyperactivity Disorder (ADHD)
        </Text>
        <TouchableOpacity style={styles.settingsButton}
        onPress={() => navigation.navigate("SettingsScreen")} // Navigate to SettingsScreen
        >
          <Text style={styles.settingsText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Booking Status Section */}
      <View style={styles.bookingContainer}>
        <View style={styles.tabs}>
          <Text style={[styles.tab, styles.activeTab]}>Booking Status</Text>
          <Text style={styles.tab}>Book History</Text>
        </View>

        <ScrollView>
          {bookings.map((booking, index) => (
            <View key={index} style={styles.bookingItem}>
              <Text style={styles.bookingHeader}>
                Please prepare for your schedule
              </Text>
              <Text style={styles.bookingDate}>{booking.date}</Text>
              <View style={styles.bookingDetails}>
                <Text style={styles.bookingTime}>{booking.time}</Text>
                <Text style={styles.bookingService}>{booking.service}</Text>
                <TouchableOpacity>
                  <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomePage')}>
                    <Image source={require('../assets/icons/home.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ServicesScreen')}>
                    <Image source={require('../assets/icons/services.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('NotificationScreen')}>
                    <Image source={require('../assets/icons/notifications.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ProfileScreen')}>
                    <Image source={require('../assets/icons/profile.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Me</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}

export default ProfileScreen;