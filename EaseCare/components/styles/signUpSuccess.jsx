import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    topImage: {
        position: 'absolute',
        top: 0,
        left: (width - 400) / 2, 
        height: 400,
        width: 400, 
        transform: [{ rotate: '180deg' }],
        zIndex: 1, 
    },
    bottomImage: {
        position: 'absolute',
        bottom: 0,
        left: (width - 400) / 2, 
        height: 700,
        width: 400,
        zIndex: 1,
    },
    checkImage: {
        height: 90, 
        width: 90, 
        marginBottom: 20,
    },
    successText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginTop: 10,
        zIndex: 3, 
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default styles;
