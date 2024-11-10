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
        width: 70, 
        height: 55, 
        marginRight: 10,
    },
    title: {
        fontSize: 32,
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
    forgotPasswordLabel: {
        color: '#D97706',
        },
    loginButton: {
        marginTop: 20,
        backgroundColor: '#007AFF',
    },
    registerButton: {
        marginTop: 20,
    },
    signUpText: {
        color: '#D97706',
        fontWeight: 'bold', 
    },
});


export default styles;