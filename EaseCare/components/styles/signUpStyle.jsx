import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    sectionHeader: {
        fontSize: 16,
        color: '#D97706',
        fontWeight: '700',
    },
    accountDetailsHeader: {
        fontSize: 16,
        color: '#D97706',
        fontWeight: '700',
        marginTop: 5,
    },
    input: {
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        flex: 1,
    },
    ageInput: {
        marginRight: 20,
    },
    separator: {
        height: 1, 
        backgroundColor: 'black', 
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
        borderColor: '#B8B8B8', 
        borderWidth: 1,

    },
    registerButton: {
        marginTop: 20,
        backgroundColor: '#007bff',
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
    topImage: {
        position: 'absolute',
        bottom: 0,
        left: (width - 400) / 2, 
        height: 370,
        width: 550, 
        zIndex: 1, 
    },
    fileUploadText: {
        color: '#D97706',
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 10,
    },
    fileButton: {
        marginBottom: 10,
    },
    fileButtonText: {
        color: 'black',
    },
    fileText: {
        color: '#333',
        fontSize: 14,
        marginBottom: 15,
    },
});

export default styles;
