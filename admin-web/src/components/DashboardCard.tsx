import { View, Text, StyleSheet } from "react-native";

export default function DashboardCard({ title, value, color, icon: Icon, iconColor }: any) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={[styles.iconCircle, { backgroundColor: iconColor }]}>
        <Icon size={58} color="#fff" strokeWidth={3} />
      </View>

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    gap: 20,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 17,
    width: 100,
    color: "#000",
  },
  value: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 38,
    color: "#000",
    marginTop: 2,
  },
});