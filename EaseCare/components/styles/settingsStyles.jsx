import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
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