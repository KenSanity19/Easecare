import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get device width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    topImage: {
        position: 'absolute',
        top: 0,
        left: (width - 400) / 2, 
        height: 400,
        width: 400, 
        transform: [{ rotate: '180deg' }],
        zIndex: 1, // Ensure it's behind the content
    },
    bottomImage: {
        position: 'absolute',
        bottom: 0,
        left: (width - 400) / 2, 
        height: 700,
        width: 400,
        zIndex: 1, // Ensure it's behind the content
    },
    sectionHeader: {
        fontSize: 16,
        color: '#D97706',
        fontWeight: '700',
        marginBottom: 10,
    },
    input: {
        marginBottom: 16,
        zIndex: 3,
    },
    registerButton: {
        marginTop: 20,
        backgroundColor: '#007AFF',
        zIndex: 3, 
    },
    registerButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    pressedButton: {
        backgroundColor: '#D97706', 
    },
    loginRedirectButton: {
        marginTop: 20,
        color: '#007AFF',
        textAlign: 'center',
        zIndex: 3, 
    },
    signUpText: {
        fontSize: 17,
        color: '#D97706',
        fontWeight: 'bold', 
    },
});

export default styles;
