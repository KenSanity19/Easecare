import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subHeader: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    paymentList: {
        flex: 1,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    selectedMethod: {
        borderColor: '#4CAF50',
    },
    paymentLogo: {
        fontSize: 24,
        marginRight: 15,
    },
    paymentDetails: {
        flex: 1,
    },
    paymentName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    paymentDetail: {
        fontSize: 14,
        color: '#666',
    },
    paymentLogoImage: {
        width: 40, // Adjust size as needed
        height: 40,
        marginRight: 10,
        resizeMode: 'contain',
    },
    
    selectedIcon: {
        fontSize: 20,
        color: '#4CAF50',
    },
    selectButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 50,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    selectButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loadingSpinner: {
        marginTop: 20,
    },
});

export default styles;
