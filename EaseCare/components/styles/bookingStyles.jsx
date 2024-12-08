import { StyleSheet } from "react-native";

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
        textAlign: 'center',
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
    addMoreButton: {
        backgroundColor: "#f0ad4e",
        padding: 12,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 10,
    },
    addMoreButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
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
        backgroundColor: "#f9f9f9",
        marginBottom: 20,
        alignItems: "center", 
    },
    bookButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
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
        width: "48%", // Adjust width to fit two fields in one row
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
        width: "48%", // Adjust width to fit two fields in one row
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

});

export default styles;
