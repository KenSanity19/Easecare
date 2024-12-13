import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert, FlatList } from "react-native";
import { getDatabase, ref, get, child, update } from "firebase/database";
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
  const [isBookingStatusSelected, setIsBookingStatusSelected] = useState(true);

  useEffect(() => {
    const fetchUserDetailsAndBookings = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        Alert.alert("Error", "User is not logged in!");
        return;
      }

      const userEmail = user.email;
      const dbRef = ref(getDatabase());

      try {
        const customerSnapshot = await get(child(dbRef, "tbl_customer"));
        const servicesSnapshot = await get(child(dbRef, "tbl_services"));

        if (customerSnapshot.exists() && servicesSnapshot.exists()) {
          let customerId = null;
          let userRecord = null;
          const servicesData = servicesSnapshot.val();

          customerSnapshot.forEach((childSnapshot) => {
            const customerData = childSnapshot.val();
            if (customerData.email === userEmail) {
              customerId = childSnapshot.key;
              userRecord = customerData;
            }
          });

          if (userRecord && customerId) {
            setUserDetails({
              firstName: userRecord.firstName || "",
              middleName: userRecord.middleName || "",
              lastName: userRecord.lastName || "",
              disabilityType: userRecord.disabilityType || "Not Specified",
            });

            const bookingsSnapshot = await get(child(dbRef, "tbl_booking"));
            if (bookingsSnapshot.exists()) {
              const bookingsData = bookingsSnapshot.val();
              const bookingsWithServiceDetails = Object.entries(bookingsData)
                .map(([bookingId, booking]) => {
                  if (booking.customer_id === customerId) {
                    const service = servicesData[booking.service_id];
                    return {
                      ...booking,
                      booking_id: bookingId,
                      service_name: service ? service.service_name : "Unknown Service",
                      price: service ? service.price : "Price not available",
                      aider_id: booking.aider_id || null, // Include aider_id
                    };
                  }
                  return null;
                })
                .filter((booking) => booking !== null);

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

  const handleCancelBooking = async (bookingId) => {
    try {
      const db = getDatabase();
      await update(ref(db, `tbl_booking/${bookingId}`), { status: "Canceled" });
      Alert.alert("Success", "Booking has been canceled!");

      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.booking_id === bookingId ? { ...booking, status: "Canceled" } : booking
        )
      );
    } catch (error) {
      console.error("Error canceling booking:", error);
      Alert.alert("Error", "Failed to cancel booking!");
    }
  };

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
  
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardDate}>{formatDateTime(item.booking_date, item.booking_time)}</Text>
  
        <TouchableOpacity
          style={styles.bookingCard}
          onPress={() =>
            Alert.alert(
              "Booking Details",
              `Service: ${item.service_name}\nDate & Time: ${formatDateTime(
                item.booking_date,
                item.booking_time
              )}\nPrice: ${item.price}`,
              [
                {
                  text: "Success",
                  onPress: () =>
                    navigation.navigate("BookingSuccessScreen", {
                      bookingId: item.booking_id,
                      aiderId: item.aider_id, // Pass aider_id
                      customerId: item.customer_id, // Pass customer_id
                    }),
                },
                {
                  text: "Close",
                  style: "cancel",
                },
              ]
            )
          }
        >
          <View style={styles.cardContent}>
            <View style={styles.cardDetails}>
              <Text style={styles.serviceName}>{item.service_name}</Text>
              <Text style={styles.servicePrice}>{`${item.price}`}</Text>
            </View>
            {isBookingHistorySelected && (
              <View
                style={[
                  styles.statusLabel,
                  item.status === "Canceled" ? styles.canceled : styles.success,
                ]}
              >
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
  
        {item.status !== "Canceled" && isBookingStatusSelected && (
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() =>
              Alert.alert("Cancel Booking", "Do you want to cancel this booking?", [
                {
                  text: "Yes",
                  onPress: () => handleCancelBooking(item.booking_id),
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

  const filteredBookings = isBookingHistorySelected
    ? bookings.filter((item) => item.status === "Success" || item.status === "Canceled")
    : bookings.filter((item) => item.status !== "Canceled");

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
            style={[styles.bookingText, isBookingStatusSelected && { color: "#007bff", fontWeight: "bold" }]}
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
            style={[styles.bookingText, isBookingHistorySelected && { color: "#007bff", fontWeight: "bold" }]}
          >
            Booking History
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator}></View>

      <View style={styles.bookingStatus}>
        <FlatList
          data={filteredBookings}
          renderItem={renderBookingItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

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
