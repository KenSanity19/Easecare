import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FF6F00",
    },
    specialization: {
        fontSize: 14,
        textAlign: "center",
        color: "#666",
        marginVertical: 5,
    },
    rating: {
        fontSize: 16,
        marginTop: 5,
        color: "#FFD700",
    },
    ratingText: {
        fontSize: 14,
        color: "#000",
    },
    feedbackContainer: {
        flex: 1,
        marginBottom: 20,
    },
    feedbackItem: {
        backgroundColor: "#f9f9f9",
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
    },
    feedbackName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    feedbackComment: {
        fontSize: 14,
        color: "#555",
    },
    feedbackRating: {
        marginTop: 5,
        fontSize: 14,
        color: "#FFD700",
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;