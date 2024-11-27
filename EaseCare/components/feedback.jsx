import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles/feedbackStyles";

const FeedbackScreen = ({ navigation }) => {
  const [appRating, setAppRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [feedback, setFeedback] = useState({
    easeOfUse: "",
    suggestion: "",
  });

  const handleRating = (setRating, value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    alert("Feedback submitted successfully!");
    console.log("User Feedback:", feedback, { appRating, serviceRating });
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
      </View>
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
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>SUBMIT FEEDBACK</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

;
export default FeedbackScreen;
