import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get device width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topImage: {
        position: 'absolute',
        top: 0,
        left: (width - 400) / 2, 
        height: 500,
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
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        zIndex: 2, // Ensure content is above background images
    },
    welcomeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        width: 100,
        height: 80,
        marginBottom: 23,
        marginLeft: -20,
    },
    welcomeText: {
        fontSize: 25,
        color: '#333333',
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 40,
        fontStyle: 'italic',
    },
    title: {
        fontSize: 56,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
        marginTop: -20,
    },
    subtitle: {
        fontSize: 16,
        color: '#C77700',
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '500',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 15,
    },
    signUpButton: {
        backgroundColor: '#007bff',
    },
    logInButton: {
        backgroundColor: '#007bff',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default styles;
