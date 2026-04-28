import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../../assets/images/bar-bg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.darkOverlay} />

      <View style={styles.contentWrapper}>
        <BlurView intensity={25} tint="dark" style={styles.glassCard}>
          <Image
            source={require("../../assets/images/logo.jpg")}
            style={styles.logoImage}
          />

          <Text style={styles.title}>Welcome to Sohnemann Bar</Text>

          <View style={styles.goldLine} />

          <Text style={styles.subtitle}>
            Book your table. Order drinks.{"\n"}Enjoy your night.
          </Text>

         <TouchableOpacity
  style={styles.primaryButton}
  onPress={() => router.push("/booking" as any)}
>
  <Text style={styles.primaryButtonText}>Book a Table</Text>
  <Text style={styles.primaryArrow}>›</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.secondaryButton}
  onPress={() => router.push("/login" as any)}
>
  <Text style={styles.secondaryButtonText}>Staff Login</Text>
  <Text style={styles.secondaryArrow}>›</Text>
</TouchableOpacity>
        </BlurView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.58)",
  },

  contentWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  glassCard: {
    width: "100%",
    borderRadius: 28,
    paddingVertical: 42,
    paddingHorizontal: 24,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0.35)",
    borderWidth: 1,
    borderColor: "rgba(214,174,92,0.35)",
  },

  logoImage: {
    width: 230,
    height: 100,
    resizeMode: "contain",
    marginBottom: 35,
  },

  title: {
    fontSize: 25,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 16,
  },

  goldLine: {
    width: 145,
    height: 1,
    backgroundColor: "#D6AE5C",
    marginBottom: 22,
  },

  subtitle: {
    fontSize: 16,
    color: "#D6D6D6",
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 45,
  },

  primaryButton: {
    width: "100%",
    height: 62,
    backgroundColor: "#D6AE5C",
    borderRadius: 16,
    paddingHorizontal: 22,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  primaryButtonText: {
    color: "#050505",
    fontSize: 20,
    fontWeight: "800",
  },

  primaryArrow: {
    color: "#050505",
    fontSize: 34,
    fontWeight: "300",
  },

  secondaryButton: {
    width: "100%",
    height: 62,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#D6AE5C",
    paddingHorizontal: 22,
    backgroundColor: "rgba(0,0,0,0.25)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  secondaryButtonText: {
    color: "#D6AE5C",
    fontSize: 20,
    fontWeight: "800",
  },

  secondaryArrow: {
    color: "#D6AE5C",
    fontSize: 34,
    fontWeight: "300",
  },
});