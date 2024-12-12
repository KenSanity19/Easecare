import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", // Ensure background is transparent to show the image
  },
  scrollView: {
    flex: 1,
    zIndex: 2, // Ensures the content is above the background image
  },
  header: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    zIndex: 3, // Ensures it's above the image
  },
  headerTitle: {
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
    zIndex: 3,
    marginTop: 30,
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
    zIndex: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  topImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    zIndex: 1, // Ensures it's in the background
  },
});

export default styles;
