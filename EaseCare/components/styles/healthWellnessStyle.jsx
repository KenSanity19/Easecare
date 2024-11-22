import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        position: 'relative',
        backgroundColor: 'white',
    },
    leftImage: {
        marginTop: 93,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50%', 
        height: '100%', 
    },
    rightImage: {
        marginTop: 93,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50%', 
        height: '100%', 
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(255 132 0);',
        marginVertical: 20,
        marginHorizontal: 20,
        textAlign: 'center',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    card: {
        width: '45%', 
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        borderWidth: 0.5, 
        borderColor: '#333333', 
    },
    cardText: {
        fontSize: 18,
        color: '#333',
        fontWeight: '600',
        textAlign: 'center',
    },
    logo: {
        width: 320,
        height: 250,
        alignSelf: 'center',
    },
});

export default styles;
