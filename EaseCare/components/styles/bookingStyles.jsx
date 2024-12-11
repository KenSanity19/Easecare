import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get device width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f9f9f9",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    serviceDetails: {
        marginBottom: 20,
    },
    serviceName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    priceText: {
        fontSize: 16,
        color: "#555",
        textAlign: "center",
    },
    genderSelector: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
    },
    genderOption: {
        alignItems: "center",
        padding: 10,
        borderWidth: 2,
        borderColor: "#ddd",
        borderRadius: 10,
    },
    selectedOption: {
        borderColor: "#1e90ff",
        backgroundColor: "#FFF3E0",
    },
    aiderImage: {
        width: 80,
        height: 80,
        marginBottom: 5,
        borderRadius: 40,
    },
    genderText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    orText: {
        fontSize: 16,
        color: "gray",
        marginHorizontal: 10,
        alignSelf: "center",
    },
    dateTimePicker: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    dateButton: {
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 8,
        width: "45%",
        alignItems: "center",
    },
    dateButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    bookingDetailsContainer: {
        width: "100%",
        padding: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        backgroundColor: "#FFD700", // Added yellow background
        marginBottom: 20,
        alignItems: "center",
    },
    bookButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        zIndex: 1, // Ensure the "BOOK NOW" button is above other content
    },
    bookButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: "#ddd",
        marginBottom: 20,
        marginTop: 5,
    },
    dateTimeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 15,
        width: "90%",
        alignSelf: "center",
    },
    dateInput: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#fff",
        width: "48%",
        justifyContent: "space-between",
    },
    timeInput: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#fff",
        width: "48%",
        justifyContent: "space-between",
    },
    dateText: {
        marginLeft: 10,
        fontSize: 16,
        color: "#555",
    },
    timeText: {
        marginLeft: 10,
        fontSize: 16,
        color: "#555",
    },
    additionalImages: { // New styles for images under the Book Now button
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
    },
    additionalImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    bottomImage: {
        position: "absolute", // Sticks the image to a specific position
        bottom: -210,            // Keep it aligned to the bottom
        marginTop: 60,     // Push the image slightly upward
        left: -20,          // Slightly move to the left
        width: "110%",        // Cover the full width of the screen
        height: height * 0.5, // Cover 30% of the screen height (adjust as needed)
        resizeMode: "cover",  // Ensure the image proportionally fills its container
        zIndex: -1,           // Ensure it's behind other content
      },
    
});

export default styles;
