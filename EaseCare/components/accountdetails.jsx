import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from "react-native";
import styles from "./styles/accountdetailsStyles";

const AccountDetailsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value="Rhealove Ariane M. Balaba" editable={false} />
        <Text style={styles.label}>Contact Number</Text>
        <TextInput style={styles.input} value="09678256412" editable={false} />
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} value="Zone 9, Cafas, Macanhan, Carmen" editable={false} />
        <Text style={styles.label}>Birth Date</Text>
        <TextInput style={styles.input} value="October 31, 2003" editable={false} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>EDIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

;
export default AccountDetailsScreen;
