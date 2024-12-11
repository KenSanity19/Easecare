import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
    },
    confirmationHeader: {
        alignItems: "center",
        marginBottom: 20,
        flexDirection: "column",
        justifyContent: 'center',
        marginTop: 50,
    },
    confirmationIcon: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    headerWithText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#333333",
        marginBottom: 10,
    },
    easeCareText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#333333",
        marginLeft: 5, // Adjust the space between the image and the "EaseCare" text
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
        fontSize: 20,
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
        width: 80,
        height: 75,
        resizeMode: "contain",
    
        
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
        paddingRight: 50,
        paddingLeft: 50,
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
