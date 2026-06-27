import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function DashboardCard({
  title,
  value,
  color,
  icon: Icon,
  iconColor,
}: any) {
  const { width, height } = useWindowDimensions();
  const s = Math.min(width / 1920, height / 1080);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: color,
          height: 120 * s,
          paddingHorizontal: 18 * s,
        },
      ]}
    >
      <View
        style={[
          styles.iconCircle,
          {
            backgroundColor: iconColor,
            width: 72 * s,
            height: 72 * s,
            borderRadius: 36 * s,
          },
        ]}
      >
        <Icon
          size={40 * s}
          color="#fff"
          strokeWidth={2.5 * s}
        />
      </View>

      <View style={styles.textContainer}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.8}
          style={[
            styles.title,
            {
              fontSize: 17 * s,
              marginBottom: 4 * s,
            },
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.value,
            {
              fontSize: 38 * s,
              lineHeight: 42 * s,
            },
          ]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    flexDirection: "row",
    alignItems: "center",
  },

  iconCircle: {
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  title: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
    textAlign: "center",
    width: "100%",
  },

  value: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
    textAlign: "center",
    width: "100%",
  },
});