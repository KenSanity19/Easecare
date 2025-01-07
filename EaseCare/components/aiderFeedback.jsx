import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import styles from "./styles/feedbackStyles";

const AiderFeedbackScreen = ({ route, navigation }) => {
  const [aiderRating, setAiderRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [feedback, setFeedback] = useState({
    easeOfUse: "",
    suggestion: "",
  });
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    customer_id: "",
  });

  // Fetch aider_id from route params
  const { aider_id } = route.params;

  useEffect(() => {
    const fetchUserDetails = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        Alert.alert("Error", "User is not logged in!");
        return;
      }

      const userId = user.uid;  // Get the UID of the current user
      const dbRef = ref(getDatabase());

      try {
        const snapshot = await get(child(dbRef, "tbl_customer"));

        if (snapshot.exists()) {
          const customers = snapshot.val();
          // Iterate over the customers to find the matching customer by email or UID
          for (const customerId in customers) {
            const customer = customers[customerId];
            if (customer.email === user.email || customerId === userId) {
              setUserDetails({
                firstName: customer.firstName || "Unknown",
                middleName: customer.middleName || "",
                lastName: customer.lastName || "Unknown",
                customer_id: customerId,  // Dynamically set the customer_id
              });
              break; // Stop once the matching customer is found
            }
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

  // Define handleRating function to update the respective rating
  const handleRating = (setRating, value) => {
    setRating(value);
  };

  const handleSubmit = async () => {
    // Validate input
    if (!feedback.suggestion.trim()) {
      Alert.alert("Incomplete Feedback", "Please fill out all fields.");
      return;
    }

    // Check if customer_id is available
    if (!userDetails.customer_id) {
      Alert.alert("Error", "Customer ID is missing.");
      return;
    }

    // Check if aider_id is available
    if (!aider_id) {
      Alert.alert("Error", "Aider ID is missing.");
      return;
    }

    try {
      const db = getDatabase();
      db.persistenceEnabled = true;
      const feedbackRef = ref(db, "tbl_aider_feedback");

      // Fetch existing feedback entries to determine the next available ID
      const snapshot = await get(feedbackRef);
      let newFeedbackId = "AF1"; // Default ID if no entries exist

      if (snapshot.exists()) {
        const feedbackEntries = snapshot.val();
        const existingIds = Object.keys(feedbackEntries);
        const lastId = existingIds[existingIds.length - 1];
        const lastIdNumber = parseInt(lastId.replace("AF", ""));
        newFeedbackId = `AF${lastIdNumber + 1}`;
      }

      // Concatenate firstName, middleName, and lastName as name
      const name = `${userDetails.firstName} ${userDetails.middleName} ${userDetails.lastName}`.trim();

      const newFeedback = {
        name: name,  // Save the concatenated name
        comment: feedback.suggestion,
        ratings: `Aider: ${aiderRating}, Service: ${serviceRating}`,
        date: new Date().toISOString().split("T")[0],
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        customer_id: userDetails.customer_id,  // Include customer_id here
        aider_id: aider_id,  // Include aider_id here
      };

      // Save feedback under the new ID
      await set(ref(db, `tbl_aider_feedback/${newFeedbackId}`), newFeedback);

      // Navigate to the success screen after submission
      navigation.navigate("FeedbackSuccessScreen");
    } catch (error) {
      console.error("Error submitting feedback: ", error);
      Alert.alert("Error", "Failed to submit feedback. Please try again.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}></View>
      <View style={styles.card}>
        <Text style={styles.title}>
          👋 <Text style={{ color: "#ff9900" }}>Help us improve</Text>
        </Text>

        <Text style={styles.label}>Rate the service provider/aider</Text>
        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleRating(setAiderRating, index + 1)}
            >
              <FontAwesome
                name="star"
                size={32}
                color={index < aiderRating ? "#FFD700" : "#DDDDDD"}
              />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Rate your service experience.</Text>
        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleRating(setServiceRating, index + 1)}
            >
              <FontAwesome
                name="star"
                size={32}
                color={index < serviceRating ? "#FFD700" : "#DDDDDD"}
              />
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Leave a comment"
          value={feedback.suggestion}
          onChangeText={(text) =>
            setFeedback((prev) => ({ ...prev, suggestion: text }))
          }
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>SUBMIT FEEDBACK</Text>
        </TouchableOpacity>
      </View>

      <ImageBackground
        source={require("../assets/images/topImage.png")}
        style={styles.bottomImage}
        resizeMode="cover"
      />
    </ScrollView>
  );
};

export default AiderFeedbackScreen;
