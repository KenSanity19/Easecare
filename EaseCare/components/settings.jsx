import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './styles/settingsStyles';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <TouchableOpacity style={styles.item} onPress={() => console.log('Navigate to Account Details')}>
        <FontAwesome name="user-circle" size={24} color="#f57c00" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Account Details</Text>
          <Text style={styles.subtitle}>View your account information, personal details, and contact information.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => console.log('Navigate to Security')}>
        <MaterialIcons name="security" size={24} color="#2196f3" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Security</Text>
          <Text style={styles.subtitle}>Access your privacy, password management, and security settings.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => console.log('Navigate to Feedback')}>
        <MaterialIcons name="feedback" size={24} color="#ffc107" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Feedback</Text>
          <Text style={styles.subtitle}>Send feedback or report issues related to the app.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => console.log('Logout')}>
        <MaterialIcons name="logout" size={24} color="#03a9f4" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Logout</Text>
        </View>
      </TouchableOpacity>

      <Image
        style={styles.footerImage}
        source={{
          uri: 'https://example.com/footer-image.png', // Replace with actual URL or local image
        }}
      />
    </View>
  );
}

export default SettingsScreen;