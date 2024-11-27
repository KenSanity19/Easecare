import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get device width
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    bottomImage: {
        position: 'absolute',
        bottom: 0,
        left: (width - 400) / 2, 
        height: 700,
        width: 400,
        zIndex: 1, // Ensure it's behind the content
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      marginVertical: 8,
      borderRadius: 8,
      backgroundColor: '#f9f9f9',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      zIndex: 2,
    },
    textContainer: {
      marginLeft: 16,
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
    },
    subtitle: {
      fontSize: 12,
      color: '#666',
      marginTop: 4,
    },
    footerImage: {
      width: '100%',
      height: 120,
      marginTop: 20,
      resizeMode: 'cover',
      borderRadius: 8,
    },
  });

  export default styles;