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
    rememberMeForgotPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 25,
        marginTop: -20,
        paddingHorizontal: 5,
    },
    
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    rememberMeText: {
        fontSize: 14,
        color: '#6e6e6e',
        marginLeft: 5,
    },
    
    forgotPasswordButton: {
        marginLeft: 'auto', // Aligns the button to the right
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
    },
    pressedButton: {
        backgroundColor: '#D97706', 
    },
    loginButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
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
        fontSize: 17,
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
        fontSize: 20,
        color: '#D97706',
        fontWeight: 'bold', 
    },
});


export default styles;