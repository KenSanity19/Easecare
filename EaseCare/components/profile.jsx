import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert, FlatList } from "react-native";
import { getDatabase, ref, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import styles from "./styles/profileStyles";

const ProfileScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    disabilityType: "",
  });
  const [bookings, setBookings] = useState([]);
  const [isBookingHistorySelected, setIsBookingHistorySelected] = useState(false);
  const [isBookingStatusSelected, setIsBookingStatusSelected] = useState(true); // Set default to true

  useEffect(() => {
    const fetchUserDetailsAndBookings = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        Alert.alert("Error", "User is not logged in!");
        return;
      }

      const userEmail = user.email; // Use the email as it is
      console.log("User Email:", userEmail);  // Log the email

      const dbRef = ref(getDatabase());

      try {
        const customerSnapshot = await get(child(dbRef, "tbl_customer"));
        const servicesSnapshot = await get(child(dbRef, "tbl_services"));

        if (customerSnapshot.exists() && servicesSnapshot.exists()) {
          let customerId = null;
          let userRecord = null;
          const servicesData = servicesSnapshot.val();

          // Loop through all customers in the tbl_customer
          customerSnapshot.forEach((childSnapshot) => {
            const customerData = childSnapshot.val();

            // Compare the email directly without any modification
            if (customerData.email === userEmail) {
              customerId = childSnapshot.key;
              userRecord = customerData;
            }
          });

          // Check if user data was found and customerId is set
          if (userRecord && customerId) {
            setUserDetails({
              firstName: userRecord.firstName || "",
              middleName: userRecord.middleName || "",
              lastName: userRecord.lastName || "",
              disabilityType: userRecord.disabilityType || "Not Specified",
            });

            // Fetch bookings for the user from tbl_booking
            const bookingsSnapshot = await get(child(dbRef, "tbl_booking"));
            if (bookingsSnapshot.exists()) {
              const bookingsData = bookingsSnapshot.val();
              const userBookings = Object.values(bookingsData).filter(
                (booking) => booking.customer_id === customerId
              );

              const bookingsWithServiceDetails = userBookings.map((booking) => {
                const service = servicesData[booking.service_id];
                return {
                  ...booking,
                  service_name: service ? service.service_name : "Unknown Service",
                  price: service ? service.price : "Price not available",
                };
              });

              setBookings(bookingsWithServiceDetails);
            } else {
              setBookings([]);
            }
          } else {
            Alert.alert("Error", "User data not found in the database!");
          }
        } else {
          Alert.alert("Error", "No customer data or services found in the database!");
        }
      } catch (error) {
        console.error("Error fetching user data and bookings: ", error);
        Alert.alert("Error", "Failed to fetch user data or bookings!");
      }
    };

    fetchUserDetailsAndBookings();
  }, []);

  const renderBookingItem = ({ item }) => {
    const formatDateTime = (dateString, timeString) => {
      const date = new Date(dateString);
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(date);
      return `${formattedDate} at ${timeString}`;
    };

    const handleCancelBooking = async (bookingId) => {
      const dbRef = ref(getDatabase());
      try {
        // Update the booking status to "Canceled"
        await get(child(dbRef, `tbl_booking/${bookingId}`)).then(async (snapshot) => {
          if (snapshot.exists()) {
            await getDatabase().ref(`tbl_booking/${bookingId}`).update({ status: "Canceled" });
            Alert.alert("Success", "Booking has been canceled!");

            // Optionally, update local state to reflect changes
            setBookings((prevBookings) =>
              prevBookings.map((booking) =>
                booking.booking_id === bookingId ? { ...booking, status: "Canceled" } : booking
              )
            );
          } else {
            Alert.alert("Error", "Booking not found!");
          }
        });
      } catch (error) {
        console.error("Error canceling booking:", error);
        Alert.alert("Error", "Failed to cancel booking!");
      }
    };

    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardDate}>{formatDateTime(item.booking_date, item.booking_time)}</Text>

        <TouchableOpacity
          style={styles.bookingCard}
          onPress={() =>
            Alert.alert(
              "Booking Details",
              `Service: ${item.service_name}\nDate & Time: ${formatDateTime(item.booking_date, item.booking_time)}\nPrice: ${item.price}`
            )
          }
        >
          <View style={styles.cardContent}>
            <View style={styles.cardDetails}>
              <Text style={styles.serviceName}>{item.service_name}</Text>
              <Text style={styles.servicePrice}>{`${item.price}`}</Text>
            </View>
          </View>
        </TouchableOpacity>

        {item.status !== "Canceled" && (
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Cancel Booking", "Do you want to cancel this booking?", [
                {
                  text: "Yes",
                  onPress: () => handleCancelBooking(item.booking_id), // Pass the booking ID here
                },
                {
                  text: "No",
                  style: "cancel",
                },
              ])
            }
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const { firstName, middleName, lastName, disabilityType } = userDetails;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://via.placeholder.com/100",
          }}
        />
        <Text style={styles.userName}>
          {`${firstName} ${middleName} ${lastName}`.trim() || "Loading..."}
        </Text>
        <Text style={styles.condition}>{disabilityType || "Loading..."}</Text>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <Text style={styles.settingsText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bookingSection}>
        <TouchableOpacity
          onPress={() => {
            setIsBookingStatusSelected(true);
            setIsBookingHistorySelected(false);
          }}
        >
          <Text
            style={[styles.bookingText, { color: "black" }, isBookingStatusSelected && { color: "#007bff", fontWeight: "bold" }]}
          >
            Booking Status
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setIsBookingHistorySelected(true);
            setIsBookingStatusSelected(false);
          }}
        >
          <Text
            style={[styles.bookingText, { color: "black" }, isBookingHistorySelected && { color: "#007bff", fontWeight: "bold" }]}
          >
            Booking History
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator}></View>

      {isBookingStatusSelected && (
        <View style={styles.bookingStatus}>
          <FlatList
            data={bookings}
            renderItem={renderBookingItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("HomePage")}>
          <Image source={require("../assets/icons/home.png")} style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("ServicesScreen")}>
          <Image source={require("../assets/icons/services.png")} style={styles.navIcon} />
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("NotificationScreen")}>
          <Image source={require("../assets/icons/notifications.png")} style={styles.navIcon} />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("ProfileScreen")}>
          <Image source={require("../assets/icons/profile.png")} style={styles.navIcon} />
          <Text style={styles.navText}>Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
