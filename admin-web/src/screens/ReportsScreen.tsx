import { ScrollView, StyleSheet, Text,TextInput, View, TouchableOpacity, useWindowDimensions, } from "react-native";
import { ClipboardList, Clock, Check, Eye, Pencil, MoreVertical, Search, Calendar, Download, Filter,} from "lucide-react-native";
import { router } from "expo-router";
import AdminLayout from "../components/AdminLayout";
import DashboardCard from "../components/DashboardCard";

const reports = [
  {
    id: "#R-2025-104",
    title: "Illegal Dumping near Riverside",
    desc: "Large amount of waste dumped near the river",
    location: "Barangay Palinpinon",
    category: "Waste Management",
    reportedBy: "Juan Dela Cruz",
    username: "@juandc",
    date: "May 26, 2026",
    time: "09:15 AM",
    status: "Pending",
  },
  {
    id: "#R-2025-103",
    title: "Water Pollution in Barangay Creek",
    desc: "Unusual color and foul smell in the water",
    location: "Barangay Apolong",
    category: "Water Pollution",
    reportedBy: "Maria Santos",
    username: "@marias",
    date: "May 26, 2026",
    time: "08:40 AM",
    status: "In Review",
  },
  {
    id: "#R-2025-102",
    title: "Illegal Logging in Forest Area",
    desc: "Several trees were cut down without any permit",
    location: "Balabag East",
    category: "Illegal Logging",
    reportedBy: "Pedro Reyes",
    username: "@pedroreyes",
    date: "May 25, 2026",
    time: "03:10 PM",
    status: "Resolved",
  },
  {
    id: "#R-2025-101",
    title: "Illegal Bird Trapping",
    desc: "Several individuals were seen capturing wild birds using nets",
    location: "Barangay Balugo",
    category: "Wildlife Concern",
    reportedBy: "Ana Garcia",
    username: "@anagarcia",
    date: "May 24, 2026",
    time: "11:30 AM",
    status: "Resolved",
  },
  {
    id: "#R-2025-100",
    title: "Clogged Drainage System",
    desc: "Drainage is clogged causing flooding on the streets",
    location: "Barangay Balili",
    category: "Waste Management",
    reportedBy: "Kyla Mendoza",
    username: "@kylamendoza",
    date: "May 26, 2026",
    time: "11:30 AM",
    status: "Pending",
  },
];

export default function ReportsScreen() {
  const { width, height } = useWindowDimensions();
  const s = Math.min(width / 1920, height / 1080);

  return (
    <AdminLayout activePage="Reports">
      <ScrollView
        style={styles.page}
        contentContainerStyle={{
          paddingHorizontal: width * 0.025,
          paddingTop: height * 0.035,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.pageTitle, { fontSize: 42 * s }]}>REPORTS</Text>
        <Text style={[styles.subtitle, { fontSize: 18 * s }]}>
          Manage and review all environmental reports submitted by users
        </Text>

        <View style={[styles.cards, { gap: width * 0.025, marginTop: height * 0.035 }]}>
          <DashboardCard
            title="Total Reports"
            value="128"
            color="#DDEAD3"
            icon={ClipboardList}
            iconColor="#20B83B"
          />
          <DashboardCard
            title="In Review"
            value="18"
            color="#CFE6FA"
            icon={Eye}
            iconColor="#259BEF"
          />
          <DashboardCard
            title="Pending"
            value="8"
            color="#FCEFCB"
            icon={Clock}
            iconColor="#000"
          />
          <DashboardCard
            title="Resolved"
            value="86"
            color="#DDEAD3"
            icon={Check}
            iconColor="#43B64A"
          />
        </View>

        <View style={[styles.filterPanel, { marginTop: height * 0.025, padding: 14 * s }]}>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search reports..."
              placeholderTextColor="#777"
              style={[styles.searchInput, { fontSize: 15 * s }]}
            />
            <Search size={20 * s} color="#000" />
          </View>

          <View style={styles.filterBox}>
            <Text style={[styles.filterLabel, { fontSize: 13 * s }]}>Category</Text>
            <Text style={[styles.filterText, { fontSize: 15 * s }]}>All Categories⌄</Text>
          </View>

          <View style={styles.filterBox}>
            <Text style={[styles.filterLabel, { fontSize: 13 * s }]}>Status</Text>
            <Text style={[styles.filterText, { fontSize: 15 * s }]}>All Statuses⌄</Text>
          </View>

          <View style={styles.dateBox}>
            <Text style={[styles.filterLabel, { fontSize: 13 * s }]}>Date Range</Text>
            <View style={styles.dateInner}>
              <Text style={[styles.filterText, { fontSize: 15 * s }]}>
                May 20, 2026-May 26, 2026
              </Text>
              <Calendar size={18 * s} color="#000" />
            </View>
          </View>

          <View style={styles.buttonColumn}>
            <View style={styles.smallButton}>
              <Filter size={14 * s} color="#34733B" />
              <Text style={[styles.buttonText, { fontSize: 14 * s }]}>Filter</Text>
            </View>
            <View style={styles.smallButton}>
              <Download size={14 * s} color="#34733B" />
              <Text style={[styles.buttonText, { fontSize: 14 * s }]}>Export</Text>
            </View>
          </View>
        </View>

        <View style={[styles.tablePanel, { marginTop: height * 0.02 }]}>
          <View style={[styles.tableHeader, { height: 48 * s }]}>
            <Text style={[styles.th, styles.idCol, { fontSize: 18 * s }]}>ID</Text>
            <Text style={[styles.th, styles.detailsCol, { fontSize: 18 * s }]}>
              Report Details
            </Text>
            <Text style={[styles.th, styles.locationCol, { fontSize: 18 * s , transform: [{ translateX: 20 * s }] }]}>
              Location
            </Text>
            <Text style={[styles.th, styles.categoryCol, { fontSize: 18 * s }]}>
              Category
            </Text>
            <Text style={[styles.th, styles.reportedCol, { fontSize: 18 * s }]}>
              Reported By
            </Text>
            <Text style={[styles.th, styles.dateCol, { fontSize: 18 * s }]}>
              Date Reported
            </Text>
            <Text style={[styles.th, styles.statusCol, { fontSize: 18 * s }]}>
              Status
            </Text>
            <Text style={[styles.th, styles.actionCol, { fontSize: 18 * s , transform: [{ translateX: 35 * s }] }]}>
              Action
            </Text>
          </View>

          {reports.map((report, index) => (
            <View key={index} style={[styles.tableRow, { minHeight: 88 * s }]}>
              <Text style={[styles.td, styles.idCol, { fontSize: 18 * s }]}>
                {report.id}
              </Text>

              <View style={[styles.detailsCol, styles.reportDetails]}>
                <View style={[styles.imageBox, { width: 48 * s, height: 48 * s }]} />
                <View style={styles.reportTextBox}>
                  <Text style={[styles.reportTitle, { fontSize: 16 * s }]}>
                    {report.title}
                  </Text>
                  <Text style={[styles.reportDesc, { fontSize: 12 * s }]}>
                    {report.desc}
                  </Text>
                </View>
              </View>

              <Text style={[styles.td, styles.locationCol, { fontSize: 16 * s, transform: [{ translateX: 20 * s }] }]}>
                {report.location}
              </Text>

              <View style={[styles.categoryCol, styles.badgeWrap]}>
                <Text
                  style={[
                    styles.badge,
                    categoryColor(report.category),
                    {
                      fontSize: 16 * s,
                      paddingHorizontal: 8 * s,
                      paddingVertical: 5 * s,
                    },
                  ]}
                >
                  {report.category}
                </Text>
              </View>

              <View style={styles.reportedCol}>
                <Text style={[styles.td, { fontSize: 16 * s }]}>
                  {report.reportedBy}
                </Text>
                <Text style={[styles.username, { fontSize: 13 * s }]}>
                  {report.username}
                </Text>
              </View>

              <View style={styles.dateCol}>
                <Text style={[styles.td, { fontSize: 16 * s }]}>
                  {report.date}
                </Text>
                <Text style={[styles.username, { fontSize: 13 * s }]}>
                  {report.time}
                </Text>
              </View>

              <View style={[styles.statusCol, styles.badgeWrap]}>
                <Text
                  style={[
                    styles.badge,
                    statusColor(report.status),
                    {
                      fontSize: 16 * s,
                      paddingHorizontal: 8 * s,
                      paddingVertical: 5 * s,
                    },
                  ]}
                >
                  {report.status}
                </Text>
              </View>

              <View style={[styles.actionCol, styles.actions]}>

              <TouchableOpacity
                  onPress={() => router.push("/report-details")}
                  style={styles.iconButton}
                >
                  <Eye size={20 * s} color="#000" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                  }}
                  style={styles.iconButton}
                >
                  <Pencil size={20 * s} color="#000" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                  }}
                  style={styles.iconButton}
                >
                  <MoreVertical size={20 * s} color="#000" />
                </TouchableOpacity>

              </View>
            </View>
          ))}

          <View style={[styles.paginationRow, { padding: 18 * s }]}>
            <Text style={[styles.showing, { fontSize: 16 * s }]}>
              Showing 1 to 6 of 128 reports
            </Text>

            <Text style={[styles.pagination, { fontSize: 16 * s }]}>
              ‹  1  2  3  ...  20  ›
            </Text>
          </View>
        </View>
      </ScrollView>
    </AdminLayout>
  );
}

function categoryColor(category: string) {
  if (category.includes("Water"))
    return { backgroundColor: "#D7B9EA", color: "#6B168F" };
  if (category.includes("Illegal Logging"))
    return { backgroundColor: "#FFD6A4", color: "#E86C00" };
  if (category.includes("Wildlife"))
    return { backgroundColor: "#F5D894", color: "#946600" };
  return { backgroundColor: "#BFEBC5", color: "#168A18" };
}

function statusColor(status: string) {
  if (status === "Pending")
    return { backgroundColor: "#FFF0B8", color: "#D99A00" };
  if (status === "In Review")
    return { backgroundColor: "#C7DDFF", color: "#315BC9" };
  return { backgroundColor: "#BFEBC5", color: "#168A18" };
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  pageTitle: {
    fontFamily: "Montserrat_700Bold",
    color: "#0B5A1E",
  },

  subtitle: {
    fontFamily: "Montserrat_700Bold",
    color: "#5D8A5F",
    marginTop: -4,
  },

  cards: {
    flexDirection: "row",
    width: "100%",
  },

  filterPanel: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  searchBox: {
    flex: 1.1,
    height: 58,
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 6,
    backgroundColor: "#f7f7f7",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  searchInput: {
    flex: 1,
    fontFamily: "Montserrat_700Bold",
    color: "#000",
    outlineStyle: "none" as any,
  },

  filterBox: {
    flex: 1,
    height: 58,
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 6,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  dateBox: {
    flex: 1.15,
    height: 58,
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 6,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  dateInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  filterLabel: {
    fontFamily: "Montserrat_700Bold",
    color: "#777",
    marginBottom: 5,
  },

  filterText: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

  buttonColumn: {
    gap: 8,
  },

  smallButton: {
    height: 26,
    minWidth: 82,
    borderWidth: 1,
    borderColor: "#34733B",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  iconButton: {
  width: 34,
  height: 34,
  borderRadius: 6,
  justifyContent: "center",
  alignItems: "center",
  },

  iconButtonHover: {
  backgroundColor: "#F2F2F2",
  },

  buttonText: {
    fontFamily: "Montserrat_700Bold",
    color: "#34733B",
  },

  tablePanel: {
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },

  tableHeader: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#d6d6d6",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  tableRow: {
    borderBottomWidth: 1,
    borderBottomColor: "#d6d6d6",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  th: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

  td: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

  idCol: {
    width: "10%",
  },

  detailsCol: {
    width: "18%",
  },

  locationCol: {
    width: "13%",
  },

  categoryCol: {
    width: "13%",
  },

  reportedCol: {
    width: "13%",
  },

  dateCol: {
    width: "12%",
  },

  statusCol: {
    width: "11%",
  },

  actionCol: {
    width: "10%",
  },

  reportDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  imageBox: {
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },

  reportTextBox: {
    flex: 1,
  },

  reportTitle: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

  reportDesc: {
    fontFamily: "Montserrat_700Bold",
    color: "#333",
    marginTop: 2,
  },

  username: {
    fontFamily: "Montserrat_700Bold",
    color: "#555",
    marginTop: 2,
  },

  badgeWrap: {
    alignItems: "flex-start",
    justifyContent: "center",
  },

  badge: {
    alignSelf: "flex-start",
    borderRadius: 5,
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
    overflow: "hidden",
    flexGrow: 0,
    flexShrink: 0,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  paginationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  showing: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

  pagination: {
    fontFamily: "Montserrat_700Bold",
    color: "#34733B",
  },
});