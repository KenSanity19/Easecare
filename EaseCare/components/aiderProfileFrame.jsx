import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from "react-native";
import { ref, get } from "firebase/database";
import { database } from "../app/firebaseConfig";  
import styles from "./styles/aiderProfileStyles";  // Import the styles

const AiderScreen = ({ route, navigation }) => {
    const { serviceName, selectedGender } = route.params || {}; // Receiving the data
    const [aiderData, setAiderData] = useState([]);
    const [filteredAiders, setFilteredAiders] = useState([]);
    const [feedbackData, setFeedbackData] = useState({}); // State for storing feedback details
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

    // Function to fetch feedback data for a specific Aider from Firebase
    const fetchFeedbackData = async (aider_id) => {
        try {
            const snapshot = await get(ref(database, "tbl_aider_feedback"));
            if (snapshot.exists()) {
                const feedbackEntries = snapshot.val();
                const feedback = Object.keys(feedbackEntries).filter(key => feedbackEntries[key].aider_id === aider_id);
                const feedbackDetails = feedback.map((key) => feedbackEntries[key]);
                setFeedbackData((prevState) => ({ ...prevState, [aider_id]: feedbackDetails }));
            }
        } catch (error) {
            console.error("Error fetching Feedback data:", error);
            Alert.alert("Error", "Failed to fetch feedback data. Please try again.");
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

    // Fetch feedback for each Aider
    useEffect(() => {
        if (filteredAiders.length > 0) {
            filteredAiders.forEach((aider) => {
                fetchFeedbackData(aider.id);
            });
        }
    }, [filteredAiders]);

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
                        <Image source={require('../assets/images/aiderProfile.png')} style={styles.aiderProfile} />
                        <Text style={styles.name}>{`${item.first_name} ${item.middle_name || ""} ${item.last_name}`}</Text>
                        <Text style={styles.specialization}>{item.service}</Text>

                        <View style={styles.separator}></View>
                        
                        <Text style={styles.feedbackTitle}>Feedback</Text>
                        {/* Display feedback if it exists for the Aider */}
                        {feedbackData[item.id] && feedbackData[item.id].length > 0 ? (
                            <View style={styles.feedbackCardContainer}>
                            
                                {feedbackData[item.id].map((feedback, index) => (
                                    <View key={index} style={styles.feedbackCard}>
                                        <Text style={styles.feedbackText}>Name: {feedback.name}</Text>
                                        <Text style={styles.feedbackText}>Comment: {feedback.comment}</Text>
                                        <Text style={styles.feedbackText}>Ratings: {feedback.ratings}</Text>
                                        <Text style={styles.feedbackText}>Date: {feedback.date}</Text>
                                    </View>
                                ))}
                            </View>
                        ) : (
                            <Text style={styles.noFeedbackText}>No feedback available for this Aider.</Text>
                        )}
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
