import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        alignItems: "center",  // Center everything horizontally
        justifyContent: "center", // Center everything vertically
    },
    profileContainer: {
        alignItems: "center",  // Center the content horizontally
        marginBottom: 20,  // Space between each profile item
    },
    profileImage: {
        width: 100, // Adjust the size as necessary
        height: 100,
        borderRadius: 50, // Make it circular
        marginBottom: 10, // Space between image and text
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#007BFF",
        textAlign: "center",  // Center the text
        marginVertical: 5,
    },
    specialization: {
        fontSize: 16,
        textAlign: "center",  // Center the specialization
        color: "#666",
        marginVertical: 5,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        width: "80%", // Center-align button and limit its width
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    noAiderText: {
        fontSize: 16,
        color: "#FF0000", // Red color to indicate no results
        textAlign: "center",  // Center the text
        marginTop: 20,
    }
});

export default styles;
