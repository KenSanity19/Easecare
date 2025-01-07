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
import { getDatabase, ref, push, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import styles from "./styles/feedbackStyles";

const FeedbackScreen = ({ navigation }) => {
  const [appRating, setAppRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [feedback, setFeedback] = useState({
    easeOfUse: "",
    suggestion: "",
  });
  const [fullName, setFullName] = useState("");
  const [customerId, setCustomerId] = useState(""); // To store the customer_id

  const handleRating = (setRating, value) => {
    setRating(value);
  };

  // Fetch the current user's name and customer ID
  useEffect(() => {
    const fetchCustomerData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        Alert.alert("Error", "User is not logged in!");
        return;
      }

      const userEmail = user.email;
      const dbRef = ref(getDatabase());

      try {
        const snapshot = await get(child(dbRef, "tbl_customer"));

        if (snapshot.exists()) {
          const customers = snapshot.val();

          // Find the user record matching the email
          const userEntry = Object.entries(customers).find(
            ([key, customer]) => customer.email === userEmail
          );

          if (userEntry) {
            const [id, userRecord] = userEntry;
            const { firstName, middleName, lastName } = userRecord;

            setCustomerId(id); // Save the customer_id
            const name = `${firstName || ""} ${middleName || ""} ${
              lastName || ""
            }`.trim();
            setFullName(name);
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

    fetchCustomerData();
  }, []);

  const handleSubmit = async () => {
    // Validate input
    if (!feedback.easeOfUse.trim() || !feedback.suggestion.trim()) {
      Alert.alert("Incomplete Feedback", "Please fill out all fields.");
      return;
    }

    try {
      const db = getDatabase();
      db.persistenceEnabled = true;
      const feedbackRef = ref(db, "tbl_app_feedback"); // Save to tbl_app_feedback

      const newFeedback = {
        customer_id: customerId || "Unknown", // Include customer_id
        name: fullName || "Unknown User",
        feedback: `${feedback.easeOfUse} - ${feedback.suggestion}`,
        ratings: `App: ${appRating}, Service: ${serviceRating}`,
        date: new Date().toISOString().split("T")[0],
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      await push(feedbackRef, newFeedback);
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
        <TextInput
          style={styles.input}
          placeholder="How easy to use the app?"
          value={feedback.easeOfUse}
          onChangeText={(text) =>
            setFeedback((prev) => ({ ...prev, easeOfUse: text }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Any suggestion?"
          value={feedback.suggestion}
          onChangeText={(text) =>
            setFeedback((prev) => ({ ...prev, suggestion: text }))
          }
        />
        <Text style={styles.label}>Rate your app experience.</Text>
        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleRating(setAppRating, index + 1)}
            >
              <FontAwesome
                name="star"
                size={32}
                color={index < appRating ? "#FFD700" : "#DDDDDD"}
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
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>SUBMIT FEEDBACK</Text>
        </TouchableOpacity>
      <ImageBackground
        source={require("../assets/images/topImage.png")}
        style={styles.bottomImage}
        resizeMode="cover"
      />
    </ScrollView>
  );
};

export default FeedbackScreen;
