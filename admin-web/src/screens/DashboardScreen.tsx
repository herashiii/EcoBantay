import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  CalendarClock,
  Check,
  ClipboardList,
  UserCircle,
} from "lucide-react-native";
import AdminLayout from "../components/AdminLayout";
import DashboardCard from "../components/DashboardCard";

const reports = [
  ["#R-2025-104", "Illegal Dumping near Riverside", "Barangay Palinpinon", "Waste Management", "Pending", "May 26, 2026"],
  ["#R-2025-103", "Water Pollution in Barangay Creek", "Barangay Apolong", "Water Pollution", "In Review", "May 26, 2026"],
  ["#R-2025-102", "Illegal Logging in Forest Area", "Balabag East", "Illegal Logging", "Resolved", "May 25, 2026"],
  ["#R-2025-101", "Illegal Bird Trapping", "Barangay Balugo", "Wildlife Concern", "Resolved", "May 24, 2026"],
];

const events = [
  ["Coastal Clean-Up Drive", "May 29, 2026"],
  ["Tree Planting Activity", "May 31, 2026"],
  ["River Rehabilitation Campaign", "June 3, 2026"],
  ["Environmental Awareness Seminar", "June 10, 2026"],
];

export default function DashboardScreen() {
  return (
    <AdminLayout activePage="Dashboard">
      <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.welcome}>WELCOME BACK, [ADMIN NAME]</Text>
          <Text style={styles.subtitle}>
            Here’s what’s happening with environmental reports
          </Text>
        </View>

        <View style={styles.cards}>
          <DashboardCard title="Total Reports" value="128" color="#DDEAD3" icon={ClipboardList} iconColor="#20B83B" />
          <DashboardCard title="Reports In Review" value="14" color="#CFE6FA" icon={Check} iconColor="#259BEF" />
          <DashboardCard title="Approved Events" value="3" color="#FCE8C8" icon={CalendarClock} iconColor="#FF8A00" />
          <DashboardCard title="Registered Users" value="308" color="#E5E8F0" icon={UserCircle} iconColor="#3D8DFF" />
        </View>

        <View style={styles.contentRow}>
          <View style={styles.reportsPanel}>
            <View style={styles.panelHeader}>
              <Text style={styles.panelTitle}>Recent Reports</Text>
              <Text style={styles.viewAll}>View All</Text>
            </View>

            <View style={styles.tableHeader}>
              <Text style={styles.thId}>ID</Text>
              <Text style={styles.thReport}>Report Title</Text>
              <Text style={styles.thLocation}>Location</Text>
              <Text style={styles.thCat}>Category</Text>
              <Text style={styles.thStatus}>Status</Text>
              <Text style={styles.thDate}>Date Submitted</Text>
            </View>

            {reports.map((r, i) => (
              <View key={i} style={styles.tableRow}>
                <Text style={styles.tdId}>{r[0]}</Text>
                <View style={styles.reportTitleBox}>
                  <View style={styles.imageBox} />
                  <Text style={styles.reportTitle}>{r[1]}</Text>
                </View>
                <Text style={styles.tdLocation}>{r[2]}</Text>
                <Text style={[styles.badge, badgeColor(r[3])]}>{r[3]}</Text>
                <Text style={[styles.badge, statusColor(r[4])]}>{r[4]}</Text>
                <Text style={styles.tdDate}>{r[5]}</Text>
              </View>
            ))}

            <View style={styles.paginationRow}>
              <Text style={styles.showing}>Showing 1 to 4 of 128 reports</Text>
              <Text style={styles.pagination}>‹  1  2  3  ...  20  ›</Text>
            </View>
          </View>

          <View style={styles.eventsPanel}>
            <View style={styles.panelHeader}>
              <Text style={styles.panelTitle}>Upcoming Events</Text>
              <Text style={styles.viewAll}>View All</Text>
            </View>

            {events.map((event, index) => (
              <View key={index} style={styles.eventRow}>
                <View style={styles.eventImage} />
                <View style={styles.eventInfo}>
                  <Text style={styles.eventTitle}>{event[0]}</Text>
                  <Text style={styles.eventDate}>▣ {event[1]}   ♦ West Balabag</Text>
                </View>
                <Text style={styles.upcomingBadge}>Upcoming</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </AdminLayout>
  );
}

function badgeColor(category: string) {
  if (category.includes("Water")) return { backgroundColor: "#D7B9EA", color: "#6B168F" };
  if (category.includes("Illegal Logging")) return { backgroundColor: "#FFD6A4", color: "#E86C00" };
  if (category.includes("Wildlife")) return { backgroundColor: "#F5D894", color: "#946600" };
  return { backgroundColor: "#BFEBC5", color: "#168A18" };
}

function statusColor(status: string) {
  if (status === "Pending") return { backgroundColor: "#FFF0B8", color: "#D99A00" };
  if (status === "In Review") return { backgroundColor: "#C7DDFF", color: "#315BC9" };
  return { backgroundColor: "#BFEBC5", color: "#168A18" };
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 36,
    paddingTop: 10,
  },
  header: {
    marginTop: 22,
  },
  welcome: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 21,
    color: "#0B5A1E",
  },
  subtitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 15,
    color: "#5D8A5F",
    marginTop: 2,
  },
  cards: {
    flexDirection: "row",
    gap: 38,
    marginTop: 52,
    width: "100%",
  },
  contentRow: {
    flexDirection: "row",
    gap: 18,
    marginTop: 36,
    width: "100%",
  },
  reportsPanel: {
    flex: 1.2,
    height: 500,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 8,
    padding: 14,
  },
  eventsPanel: {
    flex: 1,
    height: 500,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 8,
    padding: 14,
  },
  panelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  panelTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 26,
    color: "#000",
  },
  viewAll: {
    fontFamily: "Montserrat_700Bold",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 18,
    paddingVertical: 7,
    fontSize: 10,
    color: "#000",
  },
  tableHeader: {
    height: 32,
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
thId: { width: 110, fontSize: 14, fontFamily: "Montserrat_700Bold" },
thReport: { width: 210, fontSize: 14, fontFamily: "Montserrat_700Bold" },
thLocation: { width: 180, fontSize: 14, fontFamily: "Montserrat_700Bold" },
thCat: { width: 140, fontSize: 14, fontFamily: "Montserrat_700Bold" },
thStatus: { width: 130, fontSize: 14, fontFamily: "Montserrat_700Bold" },
thDate: { width: 145, fontSize: 14, fontFamily: "Montserrat_700Bold" },

  tableRow: {
    height: 72,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  tdId: { width: 95, fontSize: 12, fontFamily: "Montserrat_700Bold" },
  reportTitleBox: {
    width: 180,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  imageBox: {
    width: 44,
    height: 44,
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
  },
  reportTitle: {
    flex: 1,
    fontSize: 12,
    fontFamily: "Montserrat_700Bold",
  },
  tdLocation: {
  width: 150,
  fontSize: 12,
  fontFamily: "Montserrat_700Bold",
},
  badge: {
  width: 105,
  fontSize: 9,
  fontFamily: "Montserrat_700Bold",
  paddingVertical: 6,
  textAlign: "center",
  borderRadius: 4,
  overflow: "hidden",
  marginRight: 15,
},

tdDate: {
  width: 130,
  fontSize: 14,
  fontFamily: "Montserrat_700Bold",
},
  paginationRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  showing: {
    fontSize: 11,
    fontFamily: "Montserrat_700Bold",
  },
  pagination: {
    fontSize: 13,
    fontFamily: "Montserrat_700Bold",
    color: "#34733B",
  },
  eventRow: {
    height: 95,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  eventImage: {
     width: 60,
    height: 60,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
     fontSize: 15,
  fontFamily: "Montserrat_700Bold",
  },
  eventDate: {
    fontSize: 10,
  fontFamily: "Montserrat_700Bold",
  marginTop: 4,
  },
  upcomingBadge: {
    backgroundColor: "#D7B9EA",
  color: "#6B168F",
  paddingHorizontal: 18,
  paddingVertical: 10,
  borderRadius: 4,
  fontSize: 11,
  fontFamily: "Montserrat_700Bold",
  overflow: "hidden",
  },
});