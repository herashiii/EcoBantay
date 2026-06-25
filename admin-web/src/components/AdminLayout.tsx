import { View, StyleSheet } from "react-native";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminLayout({ children, activePage }: any) {
  return (
    <View style={styles.layout}>
      <Sidebar activePage={activePage} />
      <View style={styles.main}>
        <Topbar />
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  main: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});