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
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  bookingTime: {
    fontSize: 14,
    color: "#666",
  },
  bookingService: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  cancelButton: {
    alignSelf: "flex-end",
    marginTop: 8,
    marginRight: 16,
  },
  cancelText: {
    fontSize: 14,
    color: "red",
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
  bookingSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, 
  },
  bookingText: {
    color: 'black', 
    fontSize: 16,
    marginHorizontal: 30, 
    marginTop: 30,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  separator: {
    height: 1,
    backgroundColor: 'black', 
    width: 350,               
    alignSelf: 'center',      
    marginVertical: 10,       
  },
  cardContainer: {
    marginBottom: 16,
  },
  cardDate: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
    marginRight: 10,
  },
  bookingCard: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  statusLabel: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: "flex-end", 
  },
  
  canceled: {
    borderColor: "#f5c6cb",
  }, 
  success: {
    borderColor: "#c3e6cb",
    color: '#008000',
  },
  statusLabel: {
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  canceled: {
    backgroundColor: "red",
  },
  success: {
    backgroundColor: "green",
  },
  statusText: {
    color: "#fff", 
    fontSize: 16,
  },
  cardDetails: {
    flex: 1,
  },
  serviceName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  servicePrice: {
    fontSize: 16,
    color: "#333",
  },
  timeDetails: {
    fontSize: 14,
    color: "#555",
  },
  cancelText: {
    fontSize: 17,
    color: "red",
    fontWeight: "bold",
    textAlign: "right",
    bottom: 60,
    right: 15,
  },
  userProfile: {
    height: 150,
    width: 150,
    marginBottom: -20,
  }
  
});

export default styles;
