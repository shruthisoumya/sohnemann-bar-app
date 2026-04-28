import { View, Text, StyleSheet } from "react-native";

export default function BookingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Booking Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});