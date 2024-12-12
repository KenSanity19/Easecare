import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,
        overflow: 'visible', // Ensure children outside bounds are visible
    },
    
    header: {
        top: 130,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        zIndex: 3,
    },

    paymentList: {
        flex: 1,
        marginTop: 150, // Add some space at the top
        zIndex: 3,
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
        zIndex: 3,
    },
    selectedMethod: {
        borderColor: '#4CAF50',
        zIndex: 3,
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
        marginBottom: 180,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        zIndex: 3,
    },
    selectButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
    loadingSpinner: {
        marginTop: 20,
    },

    topImage: {
        position: 'absolute',
        top: 0,
        left: (width - 400) / 2, 
        height: 300,
        width: 400, 
        transform: [{ rotate: '180deg' }],
        opacity: 0.8,
        zIndex: 1, 
    },
    bottomImage: {
        position: 'absolute',
        bottom: -50,
        left: (width - 400) / 2, 
        height: 700,
        width: 400,
        zIndex: 1,
        opacity: 0.8,

    },
    
});

export default styles;
