import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from "react-native";
import { ref, get } from "firebase/database";
import { database } from "../app/firebaseConfig";  
import styles from "./styles/aiderProfileStyles";

const AiderScreen = ({ route }) => {
    const { selectedServices, selectedGender } = route.params || {};  // Receiving the data
    const [aiderData, setAiderData] = useState([]);
    const [filteredAiders, setFilteredAiders] = useState([]);
    const [loading, setLoading] = useState(true);  // To manage loading state

    // Function to fetch Aider data from Firebase
    const fetchAiderData = async () => {
        try {
            const snapshot = await get(ref(database, 'tbl_aider'));
            if (snapshot.exists()) {
                const data = snapshot.val();
                const aidesArray = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setAiderData(aidesArray);
            } else {
                Alert.alert("No Aiders Found", "There are no Aiders available at the moment.");
            }
        } catch (error) {
            console.error("Error fetching Aider data:", error);
            Alert.alert("Error", "Failed to fetch Aider data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Fetch Aider data when the component mounts
    useEffect(() => {
        fetchAiderData();
    }, []);

    // Filter Aiders based on selected services and gender
    useEffect(() => {
        if (aiderData.length > 0 && selectedServices && selectedGender) {
            const filtered = aiderData.filter(aider => {
                const matchesGender = aider.sex === selectedGender;
                const matchesService = selectedServices.some(service =>
                    aider.service.toLowerCase().includes(service.service_name.toLowerCase())
                );
                return matchesGender && matchesService;
            });
            setFilteredAiders(filtered);
        }
    }, [aiderData, selectedServices, selectedGender]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text> {/* You can also display a loading spinner here */}
            </View>
        );
    }

    if (filteredAiders.length === 0) {
        return <Text style={styles.noAiderText}>No Aider found matching your preferences.</Text>;
    }

    return (
        <View style={styles.container}>
            {/* Profile Header */}
            <View style={styles.header}>
                <FlatList
                    data={filteredAiders}
                    keyExtractor={(aider) => aider.id}
                    renderItem={({ item }) => (
                        <View style={styles.profileContainer} key={item.id}>
                            <Image
                                source={{ uri: "https://via.placeholder.com/80" }} // Replace with profile image URI
                                style={styles.profileImage}
                            />
                            <Text style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
                            <Text style={styles.specialization}>{item.service}</Text>
                            <Text style={styles.rating}>
                                ⭐⭐⭐⭐⭐ <Text style={styles.ratingText}>5.0</Text>
                            </Text>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            {/* Back Button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>BACK TO SERVICES</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AiderScreen;
