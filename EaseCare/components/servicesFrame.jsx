import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/servicesStyle';

const ServicesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/topImage.png')}
                style={styles.topImage}
                resizeMode="cover"/>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Services</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"/>

            </View>

            {/* Services Grid */}
            <View style={styles.gridContainer}>
                <TouchableOpacity style={[styles.card, styles.blueCard]}>
                    <Image source={require('../assets/images/dentalCare.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Dental Care</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, styles.blueCard]}>
                    <Image source={require('../assets/images/beautyParlour.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Beauty Parlour</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, styles.orangeCard]}>
                    <Image source={require('../assets/images/nailTreatment.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Nail Treatments</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.card, styles.orangeCard]}>
                    <Image source={require('../assets/images/massage.jpg')} style={styles.cardImage} />
                    <Text style={styles.cardText}>Massage</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/icons/home.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Services')}>
                    <Image source={require('../assets/icons/services.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notifications')}>
                    <Image source={require('../assets/icons/notifications.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Me')}>
                    <Image source={require('../assets/icons/profile.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Me</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ServicesScreen;
