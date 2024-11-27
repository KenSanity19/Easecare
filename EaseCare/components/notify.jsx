import React from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/notifyStyles'; // Use your existing styles here

const notifications = [
  {
    id: '1',
    title: 'EaseCare Offers',
    message: 'Limited-time offer for new users: Get 30% off your next booking! Use code EASE30 at checkout.',
    time: 'Today 1:30 PM',
    new: true,
  },
  {
    id: '2',
    title: 'EaseCare Offers',
    message: 'Limited-time offer for new users: Get 30% off your next booking! Use code EASE30 at checkout.',
    time: 'Today 8:00 AM',
    new: true,
  },
  {
    id: '3',
    title: 'EaseCare Offers',
    message: 'Limited-time offer for new users: Get 10% off your next booking! Use code EASE10 at checkout.',
    time: 'October 02, 2024',
    new: false,
  },
  {
    id: '4',
    title: 'EaseCare Offers',
    message: 'Limited-time offer for new users: Get 10% off your next booking! Use code EASE10 at checkout.',
    time: 'October 02, 2024',
    new: false,
  },
];

const NotificationScreen = () => {
  const navigation = useNavigation();

  // Filter notifications into "New" and "Previously"
  const newNotifications = notifications.filter((notification) => notification.new);
  const previousNotifications = notifications.filter((notification) => !notification.new);

  const renderNotification = ({ item }) => (
    <View style={[styles.notificationCard, item.new && styles.newNotification]}>
      <View style={styles.notificationHeader}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Notifications Section */}
  
      
      {/* New Notifications */}
      {newNotifications.length > 0 && (
        <View>
          <Text style={styles.sectionHeader}>New</Text>
          <FlatList
            data={newNotifications}
            keyExtractor={(item) => item.id}
            renderItem={renderNotification}
            ListFooterComponent={<View style={{ height: 10 }} />}
          />
        </View>
      )}

      {/* Previously Notifications */}
      {previousNotifications.length > 0 && (
        <View>
          <Text style={styles.sectionHeader}>Recent</Text>
          <FlatList
            data={previousNotifications}
            keyExtractor={(item) => item.id}
            renderItem={renderNotification}
            ListFooterComponent={<View style={{ height: 10 }} />}
          />
        </View>
      )}

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('HomePage')}
        >
          <Image
            source={require('../assets/icons/home.png')} // Replace with your icon
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('ServicesScreen')}
        >
          <Image
            source={require('../assets/icons/services.png')} // Replace with your icon
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('NotificationScreen')}
        >
          <Image
            source={require('../assets/icons/notifications.png')} // Replace with your icon
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('ProfileScreen')}
        >
          <Image
            source={require('../assets/icons/profile.png')} // Replace with your icon
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
