import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 100, 
        height: 80, 
        marginRight: 10,
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        marginBottom: 20,
    },
    forgotPasswordButton: {
        alignSelf: 'flex-start',
        marginBottom: 20,
        marginTop: -20,
    },
    pressedButton: {
        backgroundColor: '#4A90E2', 
    },
    forgotPasswordLabel: {
        color: '#D97706',
        fontWeight: '500',
    },
    loginButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    pressedButton: {
        backgroundColor: '#D97706', 
    },
    loginButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    separator: {
        height: 2, 
        backgroundColor: 'black', 
        width: '100%',
        marginVertical: 20,
        borderColor: '#333333', 
        borderWidth: 1,
        opacity: 0.3, 
    },
    socialLoginContainer: {
        marginTop: 15,
        alignItems: 'center',
        marginVertical: 20,
    },
    biometricLabel: {
        fontSize: 14,
        color: '#D97706',
        fontWeight: 'bold',
    },
    biometricBold: {
        fontWeight: 'bold',
        color: '#D97706',
    },
    orText: {
        fontSize: 14,
        color: '#666',
        marginVertical: 10,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    pressedButton: {
        backgroundColor: '#D97706', 
    },
    socialButtonText: {
        marginLeft: 5,
        color: '#333',
    },
    registerButton: {
        marginTop: 20,
    },
    signUpText: {
        fontSize: 17,
        color: '#D97706',
        fontWeight: 'bold', 
    },
});


export default styles;