import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    header: {
      backgroundColor: "#007aff",
      padding: 20,
      alignItems: "center",
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: "#fff",
    },
    userName: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
      marginTop: 10,
    },
    condition: {
      fontSize: 14,
      color: "#fff",
      marginBottom: 10,
    },
    settingsButton: {
      backgroundColor: "#fff",
      borderRadius: 8,
      paddingVertical: 6,
      paddingHorizontal: 20,
    },
    settingsText: {
      color: "#007aff",
      fontSize: 14,
      fontWeight: "bold",
    },
    bookingContainer: {
      flex: 1,
      margin: 16,
    },
    tabs: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    tab: {
      fontSize: 16,
      fontWeight: "600",
      color: "#aaa",
    },
    activeTab: {
      color: "#007aff",
      borderBottomWidth: 2,
      borderBottomColor: "#007aff",
    },
    bookingItem: {
      marginBottom: 16,
      padding: 16,
      backgroundColor: "#f9f9f9",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    bookingHeader: {
      fontSize: 14,
      color: "#555",
    },
    bookingDate: {
      fontSize: 12,
      color: "#007aff",
      marginVertical: 4,
    },
    bookingDetails: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    bookingTime: {
      fontSize: 14,
      fontWeight: "bold",
    },
    bookingService: {
      fontSize: 14,
    },
    cancelButton: {
      fontSize: 14,
      color: "#ff3b30",
      fontWeight: "bold",
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