import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get device width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: -170,
      },
      scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 20,
      },
      header: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
      },
      profileContainer: {
        alignItems: "center",
        marginBottom: 30,
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
      },
      profileName: {
        fontSize: 16,
        fontWeight: "bold",
      },
      inputContainer: {
        marginBottom: 20,
      },
      label: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 5,
      },
      input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        zIndex: 3,
      },
      saveButton: {
        backgroundColor: "#007BFF",
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: "center",
        marginBottom: 30,
        zIndex: 3,
      },
      saveButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
      },
    bottomImage: {
        position: 'absolute',
        bottom: 0,
        left: (width - 400) / 2, 
        height: 700,
        width: 400,
        zIndex: 1, // Ensure it's behind the content
    },
    passwordInputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 15,
      zIndex: 3,
    },
    passwordInput: {
      flex: 1,
      height: 40,
    },
    iconContainer: {
      padding: 5,
    },
    
  });
  export default styles;