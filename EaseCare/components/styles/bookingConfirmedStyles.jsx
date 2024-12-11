import { StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
    },
    confirmationHeader: {
        alignItems: "center",
        marginBottom: 20,
    },
    confirmationIcon: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333333",
        marginBottom: 5,
    },
    subHeaderText: {
        fontSize: 14,
        color: "#666666",
        textAlign: "center",
    },
    detailsContainer: {
        backgroundColor: "#F9F9F9",
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    detailText: {
        fontSize: 16,
        color: "#333333",
        marginBottom: 5,
    },
    detailLabel: {
        fontWeight: "bold",
    },
    footerContainer: {
        alignItems: "center",
    },
    thankYouText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333333",
        marginBottom: 10,
    },
    logo: {
        width: 150,
        height: 40,
        resizeMode: "contain",
        marginBottom: 10,
    },
    tagline: {
        fontSize: 12,
        color: "#666666",
        textAlign: "center",
        marginBottom: 20,
    },
    viewProfileButton: {
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default styles;