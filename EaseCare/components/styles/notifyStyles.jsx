import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    notificationCard: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      borderRadius: 10,
      marginVertical: 5,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      elevation: 2,
    },
    newNotification: {
      borderLeftWidth: 5,
      borderLeftColor: '#4CAF50',
    },
    notificationHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    time: {
      fontSize: 12,
      color: '#999999',
    },
    message: {
      fontSize: 14,
      color: '#333333',
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