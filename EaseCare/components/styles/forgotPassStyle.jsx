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
        width: 120, 
        height: 95, 
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    instructions: {
        fontSize: 16,
        textAlign: 'center',
        color: '#6e6e6e',
        marginBottom: 20,
    },
    input: {
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#007AFF',
    },
    backToLoginButton: {
        marginTop: 20,
    },
});

export default styles;
