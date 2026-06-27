import { ScrollView, StyleSheet, Text, View, Image, useWindowDimensions } from "react-native";
import {
  ArrowLeft,
  ClipboardList,
  MapPin,
  Camera,
  History,
  Settings,
  Check,
  X,
  ExternalLink,
} from "lucide-react-native";
import AdminLayout from "../components/AdminLayout";

export default function ReportDetailsScreen() {
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
        <ArrowLeft size={28 * s} color="#000" />

        <Text style={[styles.pageTitle, { fontSize: 42 * s, marginTop: 28 * s }]}>
          REPORT DETAILS
        </Text>

        <View style={[styles.grid, { gap: 22 * s, marginTop: 28 * s }]}>
          <View style={styles.leftColumn}>
            <View style={[styles.panel, { padding: 18 * s }]}>
              <SectionTitle icon={ClipboardList} title="Report Information" s={s} />

              <View style={styles.infoRowTop}>
                <Text style={[styles.label, { fontSize: 18 * s }]}>Description</Text>
                <Text style={[styles.description, { fontSize: 16 * s }]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </Text>
              </View>

              <InfoRow label="Category" value="Waste Management" s={s} />
              <InfoRow label="Date Submitted" value="May 20, 2026 · 9:10 AM" s={s} />

              <View style={styles.infoRow}>
                <Text style={[styles.label, { fontSize: 18 * s }]}>Status</Text>
                <Text
                  style={[
                    styles.badge,
                    styles.pendingBadge,
                    {
                      fontSize: 16 * s,
                      paddingHorizontal: 9 * s,
                      paddingVertical: 5 * s,
                    },
                  ]}
                >
                  Pending
                </Text>
              </View>
            </View>

            <View style={[styles.panel, { padding: 18 * s, marginTop: 22 * s }]}>
              <SectionTitle icon={Camera} title="Attached Images (3)" s={s} />

              <View style={styles.imagesRow}>
                <Text style={[styles.arrow, { fontSize: 24 * s }]}>‹</Text>

                <Image
                  source={{ uri: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=400" }}
                  style={[styles.reportImage, { width: 180 * s, height: 140 * s }]}
                />
                <Image
                  source={{ uri: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=400" }}
                  style={[styles.reportImage, { width: 180 * s, height: 140 * s }]}
                />
                <Image
                  source={{ uri: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=400" }}
                  style={[styles.reportImage, { width: 180 * s, height: 140 * s }]}
                />

                <Text style={[styles.arrow, { fontSize: 24 * s }]}>›</Text>
              </View>
            </View>

            <View style={[styles.panel, { padding: 18 * s, marginTop: 22 * s }]}>
              <SectionTitle icon={History} title="Status History" s={s} />

              {[
  ["Pending", "May 20, 2026 · 9:10 AM", "Report submitted by user"],
  ["In Review", "—", "Pending"],
  ["Resolved", "—", "Pending"],
  ["Rejected", "—", "Pending"],
].map((item, index) => (
  <View key={index} style={[styles.historyRow, { minHeight: 42 * s }]}>
    <View style={styles.historyDotCol}>
      <View
        style={[
          styles.dot,
          index === 0 ? styles.activeDot : styles.inactiveDot,
        ]}
      />
    </View>

    <View style={styles.historyStatusCol}>
      <Text
        style={[
          styles.badge,
          historyBadgeColor(item[0]),
          {
            fontSize: 16 * s,
            paddingHorizontal: 9 * s,
            paddingVertical: 5 * s,
          },
        ]}
      >
        {item[0]}
      </Text>
    </View>

    <Text style={[styles.historyDateCol, { fontSize: 16 * s }]}>
      {item[1]}
    </Text>

    <Text style={[styles.historyRemarksCol, { fontSize: 16 * s }]}>
      {item[2]}
    </Text>
  </View>
))}
            </View>
          </View>

          <View style={styles.rightColumn}>
            <View style={[styles.panel, { padding: 18 * s }]}>
              <SectionTitle icon={MapPin} title="Location" s={s} />

              <Image
                source={{
                  uri: "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+ff0000(123.2400,9.2800)/123.2400,9.2800,13/600x220?access_token=pk.fake",
                }}
                style={[styles.mapImage, { height: 170 * s }]}
              />

              <View style={styles.locationFooter}>
                <Text style={[styles.locationText, { fontSize: 16 * s }]}>
                  West Balabag, Valencia, Negros Oriental{"\n"}
                  Coordinates: 14.213°N, 121.1681°E
                </Text>

                <View style={styles.mapButton}>
                  <Text style={[styles.mapButtonText, { fontSize: 16 * s }]}>
                    View in Maps
                  </Text>
                  <ExternalLink size={18* s} color="#20B83B" />
                </View>
              </View>
            </View>

            <View style={[styles.panel, { padding: 18 * s, marginTop: 22 * s }]}>
              <SectionTitle icon={MapPin} title="Reported By" s={s} />

              <InfoRow label="User ID" value="#R-2025-104" s={s} />
              <InfoRow label="Name" value="Juan Dela Cruz" s={s} />
              <InfoRow label="Email" value="juandelacruz@email.com" s={s} />
              <InfoRow label="Contact No." value="0912 345 5678" s={s} />
            </View>

            <View style={[styles.panel, { padding: 18 * s, marginTop: 22 * s }]}>
              <SectionTitle icon={Settings} title="Actions" s={s} />

              <ActionButton
                text="Mark as In Review"
                color="#259BEF"
                icon={Check}
                s={s}
              />
              <ActionButton
                text="Mark as Resolved"
                color="#20B83B"
                icon={Check}
                s={s}
              />
              <ActionButton
                text="Reject Report"
                color="#FF3B3B"
                icon={X}
                s={s}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </AdminLayout>
  );
}

function SectionTitle({ icon: Icon, title, s }: any) {
  return (
    <View style={styles.sectionTitleRow}>
      <Icon size={18 * s} color="#000" />
      <Text style={[styles.sectionTitle, { fontSize: 18 * s }]}>{title}</Text>
    </View>
  );
}

function InfoRow({ label, value, s }: any) {
  return (
    <View style={styles.infoRow}>
      <Text style={[styles.label, { fontSize: 18 * s }]}>{label}</Text>
      <Text style={[styles.valueText, { fontSize: 16 * s }]}>{value}</Text>
    </View>
  );
}

function ActionButton({ text, color, icon: Icon, s }: any) {
  return (
    <View style={[styles.actionButton, { borderColor: color, marginTop: 18 * s }]}>
      <Icon size={17 * s} color={color} />
      <Text style={[styles.actionButtonText, { color, fontSize: 16 * s }]}>
        {text}
      </Text>
    </View>
  );
}

function historyBadgeColor(status: string) {
  if (status === "Pending") return styles.pendingBadge;
  if (status === "In Review") return styles.reviewBadge;
  if (status === "Resolved") return styles.resolvedBadge;
  return styles.rejectedBadge;
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pageTitle: {
    fontFamily: "Montserrat_700Bold",
    color: "#0B5A1E",
  },
  grid: {
    flexDirection: "row",
    width: "100%",
  },
  leftColumn: {
    flex: 1.15,
  },
  rightColumn: {
    flex: 1,
  },
  panel: {
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },
  infoRowTop: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#d6d6d6",
    paddingBottom: 14,
    marginBottom: 2,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#d6d6d6",
    paddingVertical: 13,
  },
  label: {
    width: "35%",
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },
  description: {
    flex: 1,
    fontFamily: "Montserrat_700Bold",
    color: "#333",
    lineHeight: 19,
  },
  valueText: {
    flex: 1,
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },
  badge: {
    alignSelf: "flex-start",
    borderRadius: 5,
    fontFamily: "Montserrat_700Bold",
    overflow: "hidden",
    textAlign: "center",
  },
  pendingBadge: {
    backgroundColor: "#FFF0B8",
    color: "#D99A00",
  },
  reviewBadge: {
    backgroundColor: "#C7DDFF",
    color: "#315BC9",
  },
  resolvedBadge: {
    backgroundColor: "#BFEBC5",
    color: "#168A18",
  },
  rejectedBadge: {
    backgroundColor: "#FFD0D0",
    color: "#D83030",
  },
  imagesRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reportImage: {
    borderRadius: 7,
    backgroundColor: "#ddd",
  },
  arrow: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },
  historyRow: {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
},

historyDotCol: {
  width: "8%",
  alignItems: "center",
},

historyStatusCol: {
  width: "24%",
  alignItems: "flex-start",
},

historyDateCol: {
  width: "34%",
  fontFamily: "Montserrat_700Bold",
  color: "#000",
},

historyRemarksCol: {
  width: "34%",
  fontFamily: "Montserrat_700Bold",
  color: "#000",
  textAlign: "left",
},
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
  },
  activeDot: {
    backgroundColor: "#F5B351",
    borderColor: "#E39A2E",
  },
  inactiveDot: {
    backgroundColor: "#fff",
    borderColor: "#aaa",
  },
  historyText: {
    flex: 1,
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },
  historyTextRight: {
    flex: 1,
    fontFamily: "Montserrat_700Bold",
    color: "#000",
    textAlign: "right",
  },
  mapImage: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
  },
  locationFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    gap: 10,
  },
  locationText: {
    flex: 1,
    fontFamily: "Montserrat_700Bold",
    color: "#333",
  },
  mapButton: {
    borderWidth: 1,
    borderColor: "#9DE5A0",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  mapButtonText: {
    fontFamily: "Montserrat_700Bold",
    color: "#20B83B",
  },
  actionButton: {
    height: 42,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  actionButtonText: {
    fontFamily: "Montserrat_700Bold",
  },
});