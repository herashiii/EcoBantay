import { View, Text, StyleSheet } from "react-native";
import { Bell, Menu, UserCircle } from "lucide-react-native";

export default function Topbar() {
  return (
    <View style={styles.topbar}>
      <Menu size={24} color="#000" />

      <View style={styles.right}>
        <Bell size={19} color="#000" />
        <View style={styles.divider} />
        <UserCircle size={29} color="#168A18" />
        <View>
          <Text style={styles.name}>[Admin Name]</Text>
          <Text style={styles.role}>System Administrator</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    height: 74,
    backgroundColor: "#ffffff",
    paddingHorizontal: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: "#000",
  },
  name: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 11,
    color: "#000",
  },
  role: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 7,
    color: "#000",
  },
});