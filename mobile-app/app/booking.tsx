import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { API_URL } from "../constants/config";
const timeSlots = ["18:00", "19:00", "20:00", "21:00", "22:00"];
const guests = ["2", "3", "4", "5", "6+"];
const tables = ["Indoor", "Window", "Bar Counter", "Outdoor"];

export default function BookingScreen() {
  const [selectedGuest, setSelectedGuest] = useState("2");
  const [selectedTime, setSelectedTime] = useState("20:00");
  const [selectedTable, setSelectedTable] = useState("Indoor");

 const handleConfirm = async () => {
  try {
    const bookingData = {
      guest: selectedGuest,
      time: selectedTime,
      table: selectedTable,
      date: "Today",
    };

    console.log("Sending to:", `${API_URL}/api/bookings`);
    console.log("Booking data:", bookingData);

    const response = await fetch(`${API_URL}/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    console.log("Response status:", response.status);

    const data = await response.json();
    console.log("Response data:", data);

    if (!response.ok) {
      Alert.alert("Error", data.message || "Booking failed");
      return;
    }

    Alert.alert("Booking Confirmed 🍸", "Saved to database!");
  } catch (error) {
    console.log("Booking error details:", error);
    Alert.alert("Error", "Booking failed. Check terminal logs.");
  }
};

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Book a Table</Text>
      <Text style={styles.subtitle}>Reserve your night at Sohnemann Bar</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Select Date</Text>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>Today</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Guests</Text>
        <View style={styles.row}>
          {guests.map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.option, selectedGuest === item && styles.selectedOption]}
              onPress={() => setSelectedGuest(item)}
            >
              <Text style={[styles.optionText, selectedGuest === item && styles.selectedText]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Time</Text>
        <View style={styles.row}>
          {timeSlots.map((time) => (
            <TouchableOpacity
              key={time}
              style={[styles.option, selectedTime === time && styles.selectedOption]}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={[styles.optionText, selectedTime === time && styles.selectedText]}>
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Table Preference</Text>
        <View style={styles.row}>
          {tables.map((table) => (
            <TouchableOpacity
              key={table}
              style={[styles.option, selectedTable === table && styles.selectedOption]}
              onPress={() => setSelectedTable(table)}
            >
              <Text style={[styles.optionText, selectedTable === table && styles.selectedText]}>
                {table}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#050505" },
  content: { padding: 24, paddingTop: 70 },
  title: { color: "#FFFFFF", fontSize: 32, fontWeight: "800", marginBottom: 8 },
  subtitle: { color: "#B8B8B8", fontSize: 16, marginBottom: 30 },
  card: {
    backgroundColor: "#111111",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(214,174,92,0.25)",
  },
  label: { color: "#D6AE5C", fontSize: 15, fontWeight: "700", marginBottom: 14 },
  input: {
    height: 52,
    backgroundColor: "#1A1A1A",
    borderRadius: 14,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  inputText: { color: "#FFFFFF", fontSize: 16 },
  row: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  option: {
    backgroundColor: "#1A1A1A",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#333",
  },
  selectedOption: {
    backgroundColor: "#D6AE5C",
    borderColor: "#D6AE5C",
  },
  optionText: { color: "#FFFFFF", fontSize: 15, fontWeight: "600" },
  selectedText: { color: "#050505" },
  button: {
    height: 60,
    backgroundColor: "#D6AE5C",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#050505", fontSize: 18, fontWeight: "800" },
});