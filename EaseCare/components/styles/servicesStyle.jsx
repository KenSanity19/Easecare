import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 200,
    },
    topImage: {
        position: 'absolute',
        top: 0,
        left: (width - 400) / 2, 
        height: 500,
        width: 400, 
        transform: [{ rotate: '180deg' }],
        zIndex: 0, 
    },
    header: {
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 35,
        fontWeight: 'bold',
        zIndex: 3, 
        paddingBottom: 20,
    },
    searchContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    searchInput: {
        width: '90%',
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        zIndex: 3, 
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        zIndex: 3, 
    },
    card: {
        width: '40%',
        aspectRatio: 1,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orangeCard: {
        backgroundColor: '#FFA500',
    },
    blueCard: {
        backgroundColor: '#1E90FF',
    },
    cardImage: {
        width: 125,
        height: 80,
        marginBottom: 10,
    },
    cardText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bottomNav: {
        position: 'absolute',  
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#f9f9f9',
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    navIcon: {
        width: 40,
        height: 40,
        marginBottom: 4,
    },
    navText: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
    },
    
});

export default styles;
