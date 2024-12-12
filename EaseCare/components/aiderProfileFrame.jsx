import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from "react-native";
import { ref, get } from "firebase/database";
import { database } from "../app/firebaseConfig";  
import styles from "./styles/aiderProfileStyles";

const AiderScreen = ({ route, navigation }) => {  // Added navigation prop
    const { serviceName, selectedGender } = route.params || {}; // Receiving the data
    const [aiderData, setAiderData] = useState([]);
    const [filteredAiders, setFilteredAiders] = useState([]);
    const [loading, setLoading] = useState(true); // To manage loading state

    // Function to fetch Aider data from Firebase
    const fetchAiderData = async () => {
        try {
            const snapshot = await get(ref(database, "tbl_aider"));
            if (snapshot.exists()) {
                const data = snapshot.val();
                const aidesArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
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

    // Filter Aiders based on selected service and gender
    useEffect(() => {
        if (aiderData.length > 0 && serviceName && selectedGender) {
            const filtered = aiderData.filter((aider) => {
                const matchesGender = aider.sex === selectedGender;
                const matchesService = aider.service.toLowerCase().includes(serviceName.toLowerCase());
                return matchesGender && matchesService;
            });
            setFilteredAiders(filtered);
        }
    }, [aiderData, serviceName, selectedGender]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (filteredAiders.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.noAiderText}>No Aider found matching your preferences.</Text>
            </View>
        );
    }

    // Navigate back to ServicesScreen when the button is clicked
    const handleBackToServices = () => {
        navigation.navigate("ServicesScreen");  // Navigate to ServicesScreen
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredAiders}
                keyExtractor={(aider) => aider.id}
                renderItem={({ item }) => (
                    <View style={styles.profileContainer} key={item.id}>
                        <Image
                            source={{ uri: "https://via.placeholder.com/80" }} // Replace with profile image URI
                            style={styles.profileImage}
                        />
                        <Text style={styles.name}>{`${item.first_name} ${item.middle_name || ""} ${item.last_name}`}</Text>
                        <Text style={styles.specialization}>{item.service}</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity style={styles.button} onPress={handleBackToServices}>
                <Text style={styles.buttonText}>BACK TO SERVICES</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AiderScreen;
