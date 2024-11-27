import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/homeStyles';

const HomePage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Main Content */}
            <ScrollView contentContainerStyle={styles.content}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Text style={styles.discountText}>20% OFF</Text>
                    <Text style={styles.verifiedText}>For VERIFIED users</Text>
                </View>

                {/* Package Services Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Package Services</Text>
                    <Image
                        source={require('../assets/images/nailsDental.png')}
                        style={styles.packageImage}
                    />
                    <Text style={styles.packageDescription}>
                        Nails Treatments and Dental Care
                    </Text>
                </View>

                {/* Most Booked Services Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>The most booked services</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAllText}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceRow}>
                        <View style={styles.serviceCard}>
                            <Image
                                source={require('../assets/images/massage.png')}
                                style={styles.serviceImage}
                            />
                            <Text style={styles.serviceText}>Massage</Text>
                        </View>
                        <View style={styles.serviceCard}>
                            <Image
                                source={require('../assets/images/beauty.png')}
                                style={styles.serviceImage}
                            />
                            <Text style={styles.serviceText}>Beauty Parlour</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Fixed Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('HomePage')}
                >
                    <Image
                        source={require('../assets/icons/home.png')}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('ServicesScreen')}
                >
                    <Image
                        source={require('../assets/icons/services.png')}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navText}>Services</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('Notifications')}
                >
                    <Image
                        source={require('../assets/icons/notifications.png')}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('ProfileScreen')}
                >
                    <Image
                        source={require('../assets/icons/profile.png')}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navText}>Me</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomePage;
