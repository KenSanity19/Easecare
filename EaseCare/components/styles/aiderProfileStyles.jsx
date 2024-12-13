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
        textAlign: "center",  
        color: "#666",
        marginVertical: 5,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        width: "80%", 
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    noAiderText: {
        fontSize: 16,
        color: "#FF0000", 
        textAlign: "center",  
        marginTop: 20,
    },
    aiderProfile: {
        height: 80,
        width: 80,
    },

    // Feedback card styles
    feedbackCardContainer: {
        marginTop: 15,
        backgroundColor: "#ffa500",
        padding: 15,
        borderRadius: 8,
        width: 340,
        alignSelf: "center",
    },
    feedbackTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginRight: 230,
        marginTop: 20,
        
    },
    feedbackCard: {
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    feedbackText: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },
    noFeedbackText: {
        fontSize: 16,
        color: "#FF0000", 
        textAlign: "center",  
        marginTop: 10,
    },
    separator: {
        height: 1,
        backgroundColor: 'black', 
        width: 350,               
        alignSelf: 'center',      
        marginVertical: 10,       
    },
});

export default styles;
