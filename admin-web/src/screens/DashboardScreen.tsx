import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
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
  const { width, height } = useWindowDimensions();

  const s = Math.min(width / 1920, height / 1080);
  const panelHeight = height * 0.58;

  return (
    <AdminLayout activePage="Dashboard">
      <ScrollView
        style={styles.page}
        contentContainerStyle={{
          paddingHorizontal: width * 0.02,
          paddingTop: height * 0.012,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: height * 0.025 }}>
          <Text style={[styles.welcome, { fontSize: 24 * s }]}>
            WELCOME BACK, [ADMIN NAME]
          </Text>
          <Text style={[styles.subtitle, { fontSize: 16 * s }]}>
            Here’s what’s happening with environmental reports
          </Text>
        </View>

        <View style={[styles.cards, { gap: width * 0.025, marginTop: height * 0.065 }]}>
          <DashboardCard title="Total Reports" value="128" color="#DDEAD3" icon={ClipboardList} iconColor="#20B83B" />
          <DashboardCard title="Reports In Review" value="14" color="#CFE6FA" icon={Check} iconColor="#259BEF" />
          <DashboardCard title="Approved Events" value="3" color="#FCE8C8" icon={CalendarClock} iconColor="#FF8A00" />
          <DashboardCard title="Registered Users" value="308" color="#E5E8F0" icon={UserCircle} iconColor="#3D8DFF" />
        </View>

        <View style={[styles.contentRow, { gap: width * 0.012, marginTop: height * 0.045 }]}>
          <View style={[styles.reportsPanel, { height: panelHeight, padding: 16 * s }]}>
            <View style={styles.panelHeader}>
              <Text style={[styles.panelTitle, { fontSize: 30 * s }]}>Recent Reports</Text>
              <Text style={[styles.viewAll, { fontSize: 10 * s }]}>View All</Text>
            </View>

            <View style={[styles.tableHeader, { height: 36 * s, paddingHorizontal: 10 * s }]}>
              <Text style={[styles.th, styles.colId, { fontSize: 14 * s }]}>ID</Text>
              <Text style={[styles.th, styles.colReport, { fontSize: 14 * s }]}>Report Title</Text>
              <Text style={[styles.th, styles.colLocation, { fontSize: 14 * s }]}>Location</Text>
              <Text style={[styles.th, styles.colCategory, { fontSize: 14 * s }]}>Category</Text>
              <Text style={[styles.th, styles.colStatus, { fontSize: 14 * s }]}>Status</Text>
              <Text style={[styles.th, styles.colDate, { fontSize: 14 * s }]}>Date Submitted</Text>
            </View>

            {reports.map((r, i) => (
              <View key={i} style={[styles.tableRow, { height: 78 * s, paddingHorizontal: 10 * s }]}>
                <Text style={[styles.td, styles.colId, { fontSize: 13 * s }]}>{r[0]}</Text>

                <View style={[styles.reportTitleBox, styles.colReport]}>
                  <View style={[styles.imageBox, { width: 48 * s, height: 48 * s }]} />
                  <Text style={[styles.reportTitle, { fontSize: 13 * s }]}>{r[1]}</Text>
                </View>

                <Text style={[styles.td, styles.colLocation, { fontSize: 13 * s }]}>{r[2]}</Text>

                <View style={styles.colCategory}>
                  <Text style={[styles.badge, badgeColor(r[3]), { fontSize: 9 * s, paddingVertical: 6 * s }]}>
                    {r[3]}
                  </Text>
                </View>

                <View style={styles.colStatus}>
                  <Text style={[styles.badge, statusColor(r[4]), { fontSize: 9 * s, paddingVertical: 6 * s }]}>
                    {r[4]}
                  </Text>
                </View>

                <Text style={[styles.td, styles.colDate, { fontSize: 13 * s }]}>{r[5]}</Text>
              </View>
            ))}

            <View style={styles.paginationRow}>
              <Text style={[styles.showing, { fontSize: 12 * s }]}>
                Showing 1 to 4 of 128 reports
              </Text>
              <Text style={[styles.pagination, { fontSize: 14 * s }]}>
                ‹  1  2  3  ...  20  ›
              </Text>
            </View>
          </View>

          <View style={[styles.eventsPanel, { height: panelHeight, padding: 16 * s }]}>
            <View style={styles.panelHeader}>
              <Text style={[styles.panelTitle, { fontSize: 30 * s }]}>Upcoming Events</Text>
              <Text style={[styles.viewAll, { fontSize: 10 * s }]}>View All</Text>
            </View>

            {events.map((event, index) => (
              <View key={index} style={[styles.eventRow, { height: 96 * s }]}>
                <View style={[styles.eventImage, { width: 58 * s, height: 58 * s }]} />
                <View style={styles.eventInfo}>
                  <Text style={[styles.eventTitle, { fontSize: 15 * s }]}>{event[0]}</Text>
                  <Text style={[styles.eventDate, { fontSize: 10 * s }]}>
                    ▣ {event[1]}  ♦ West Balabag
                  </Text>
                </View>
                <Text
                  style={[
                    styles.upcomingBadge,
                    {
                      fontSize: 11 * s,
                      paddingHorizontal: 18 * s,
                      paddingVertical: 10 * s,
                    },
                  ]}
                >
                  Upcoming
                </Text>
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
  },

  welcome: {
    fontFamily: "Montserrat_700Bold",
    color: "#0B5A1E",
  },
  subtitle: {
    fontFamily: "Montserrat_700Bold",
    color: "#5D8A5F",
    marginTop: 2,
  },

  cards: {
    flexDirection: "row",
    width: "100%",
  },

  contentRow: {
    flexDirection: "row",
    width: "100%",
  },

  reportsPanel: {
    flex: 1.15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 8,
  },
  eventsPanel: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 8,
  },

  panelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  panelTitle: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },
  viewAll: {
    fontFamily: "Montserrat_700Bold",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 18,
    paddingVertical: 7,
    color: "#000",
  },

  tableHeader: {
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  tableRow: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
  },

  th: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },
  td: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

  colId: { flex: 0.75 },
  colReport: { flex: 1.75 },
  colLocation: { flex: 1.35 },
  colCategory: { flex: 1.2 },
  colStatus: { flex: 1.1 },
  colDate: { flex: 1.2 },

  reportTitleBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  imageBox: {
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
  },
  reportTitle: {
    flex: 1,
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

  badge: {
    minWidth: 95,
    maxWidth: 115,
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
    borderRadius: 4,
    overflow: "hidden",
  },

  paginationRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  showing: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },
  pagination: {
    fontFamily: "Montserrat_700Bold",
    color: "#34733B",
  },

  eventRow: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  eventImage: {
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },
  eventDate: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
    marginTop: 4,
  },
  upcomingBadge: {
    backgroundColor: "#D7B9EA",
    color: "#6B168F",
    borderRadius: 4,
    fontFamily: "Montserrat_700Bold",
    overflow: "hidden",
  },
});