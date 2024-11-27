import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get device width
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    header: {
      padding: 16,
      backgroundColor: "#f5f5f5",
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
    },
    headerText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
    card: {
      margin: 16,
      padding: 16,
      backgroundColor: "#fff",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 16,
      color: "#555",
    },
    label: {
      fontSize: 14,
      color: "#555",
      marginBottom: 4,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 8,
      padding: 8,
      fontSize: 14,
      color: "#333",
      marginBottom: 16,
      backgroundColor: "#f9f9f9",
    },
    button: {
      marginTop: 16,
      backgroundColor: "#007bff",
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },bottomImage: {
        position: 'absolute',
        bottom: 0,
        left: (width - 400) / 2, 
        height: 700,
        width: 400,
        zIndex: 1, // Ensure it's behind the content
    },
  })
  export default styles;