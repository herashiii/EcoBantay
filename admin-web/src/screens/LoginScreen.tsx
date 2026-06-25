import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import { Lock, User } from "lucide-react-native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

export default function LoginScreen() {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Svg height="100%" width="42%" style={styles.leftShapes}>
        <Polygon points="0,0 190,0 90,1000 0,1000" fill="#9BCB2E" />
        <Polygon points="300,560 570,1000 90,1000" fill="#679B16" />
        <Polygon points="190,0 440,0 270,1000 90,1000" fill="#34733B" />
        
      </Svg>

      <View style={styles.content}>
        <Image
          source={require("../../assets/images/ecobantay-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>ADMIN LOG IN</Text>

        <View style={styles.inputBox}>
          <User size={32} color="#000" fill="#000" />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#FFFFFF"
            style={styles.input}
          />
        </View>

        <View style={styles.inputBox}>
          <Lock size={30} color="#000" fill="#000" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#FFFFFF"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <Text style={styles.forgot}>Forgot Password?</Text>

        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#E7F5BE",
    overflow: "hidden",
  },
  leftShapes: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  content: {
    position: "absolute",
    top: "10%",
    right: "25%",
    width: 520,
    alignItems: "center",
  },
  logo: {
    width: "90%",
    height: 340,
    marginBottom: -25,
  },
  title: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 26,
    color: "#005B1A",
    marginBottom: 22,
  },
  inputBox: {
    width: 470,
    height: 68,
    backgroundColor: "#34733B",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 28,
    marginBottom: 28,
    gap: 24,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontFamily: "Montserrat_700Bold",
    fontSize: 25,
    outlineStyle: "none" as any,
  },
  forgot: {
    width: 470,
    textAlign: "right",
    marginTop: -16,
    marginBottom: 28,
    fontFamily: "Montserrat_700Bold",
    color: "#005B1A",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#34733B",
    width: 205,
    height: 55,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#FFFFFF",
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
  },
});