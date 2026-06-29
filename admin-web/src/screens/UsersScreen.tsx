import { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import {
  Calendar,
  Check,
  Eye,
  Filter,
  Search,
  UserPlus,
  Users,
  UsersRound,
  Flag,
  X,
  Mail,
  Phone,
} from "lucide-react-native";
import AdminLayout from "../components/AdminLayout";
import DashboardCard from "../components/DashboardCard";

const users = [
  ["#U-000312", "Juan Dela Cruz", "@juandc", "juandc@email.com", "User", "May 26, 2026", "09:15 AM"],
  ["#U-000311", "Maria Santos", "@marias", "marias@email.com", "User", "May 26, 2026", "08:40 AM"],
  ["#U-000310", "Pedro Reyes", "@pedroreyes", "pedroreyes@email.com", "User", "May 25, 2026", "03:10 PM"],
  ["#U-000309", "Ana Garcia", "@anagarcia", "anagarcia@email.com", "Admin", "May 24, 2026", "11:30 AM"],
  ["#U-000308", "Kyla Mendoza", "@kylamendoza", "kylamendoza@email.com", "Admin", "May 24, 2026", "11:30 AM"],
  ["#U-000306", "Mark Tan", "@marktan", "marktan@email.com", "User", "May 23, 2026", "2:20 PM"],
];


export default function UsersScreen() {
  const { width, height } = useWindowDimensions();
  const s = Math.min(width / 1920, height / 1080);

  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [flaggedUsers, setFlaggedUsers] = useState<string[]>([]);

  const [isAddAdminOpen, setIsAddAdminOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const openUserProfile = (user: any) => {
    setSelectedUser(user);
    setIsProfileOpen(true);
  };

  const closeUserProfile = () => {
    setIsProfileOpen(false);
    setSelectedUser(null);
  };

  const toggleFlagUser = (userId: string) => {
    setFlaggedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <AdminLayout activePage="Users">
      <ScrollView
        style={styles.page}
        contentContainerStyle={{
          paddingHorizontal: width * 0.025,
          paddingTop: height * 0.035,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          <View>
            <Text style={[styles.pageTitle, { fontSize: 42 * s }]}>USERS</Text>
            <Text style={[styles.subtitle, { fontSize: 18 * s }]}>
              Manage and monitor all registered users in the system
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setIsAddAdminOpen(true)}
            style={[
              styles.addButton,
              {
                paddingHorizontal: 18 * s,
                height: 38 * s,
                borderRadius: 6 * s,
              },
            ]}
          >
            <UserPlus size={16 * s} color="#fff" />
            <Text style={[styles.addButtonText, { fontSize: 16 * s }]}>
              Add Administrator
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.cards, { gap: width * 0.025, marginTop: height * 0.035 }]}>
          <DashboardCard title="Total Users" value="312" color="#DDEAD3" icon={UsersRound} iconColor="#20B83B" />
          <DashboardCard title="Active Users" value="276" color="#CFE6FA" icon={Check} iconColor="#259BEF" />
          <DashboardCard title="New This Month" value="28" color="#FCEFCB" icon={UserPlus} iconColor="#FFC02B" />
          <DashboardCard title="Inactive Users" value="36" color="#DADAF8" icon={Users} iconColor="#7C7CF2" />
        </View>

        <View style={[styles.filterPanel, { marginTop: height * 0.025, padding: 14 * s }]}>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search users..."
              placeholderTextColor="#777"
              style={[styles.searchInput, { fontSize: 16 * s }]}
            />
            <Search size={20 * s} color="#000" />
          </View>

          <View style={styles.filterBox}>
            <Text style={[styles.filterLabel, { fontSize: 16 * s }]}>Roles</Text>
            <Text style={[styles.filterText, { fontSize: 16 * s }]}>All Roles⌄</Text>
          </View>

          <View style={styles.filterBox}>
            <Text style={[styles.filterLabel, { fontSize: 16 * s }]}>Status</Text>
            <Text style={[styles.filterText, { fontSize: 16 * s }]}>All Statuses⌄</Text>
          </View>

          <View style={styles.dateBox}>
            <Text style={[styles.filterLabel, { fontSize: 16 * s }]}>Date Registered</Text>
            <View style={styles.dateInner}>
              <Text style={[styles.filterText, { fontSize: 16 * s }]}>
                May 20, 2026-May 26, 2026
              </Text>
              <Calendar size={18 * s} color="#000" />
            </View>
          </View>

          <TouchableOpacity style={styles.smallButton}>
            <Filter size={14 * s} color="#34733B" />
            <Text style={[styles.buttonText, { fontSize: 16 * s }]}>Filter</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.tablePanel, { marginTop: height * 0.02 }]}>
          <View style={[styles.tableHeader, { height: 48 * s }]}>
            <Text style={[styles.th, styles.idCol, { fontSize: 18 * s }]}>ID</Text>
            <Text style={[styles.th, styles.userCol, { fontSize: 18 * s }]}>User</Text>
            <Text style={[styles.th, styles.emailCol, { fontSize: 18 * s }]}>Email</Text>
            <Text style={[styles.th, styles.roleCol, { fontSize: 18 * s }]}>Role</Text>
            <Text style={[styles.th, styles.dateCol, { fontSize: 18 * s }]}>Date Registered</Text>
            <Text style={[styles.th, styles.actionCol, { fontSize: 18 * s, transform: [{ translateX: 12 * s }] }]}>Action</Text>
          </View>

          {users.map((u, index) => {
            const isFlagged = flaggedUsers.includes(u[0]);

            return (
              <View key={index} style={[styles.tableRow, { minHeight: 82 * s }]}>
                <Text style={[styles.td, styles.idCol, { fontSize: 16 * s }]}>{u[0]}</Text>

                <View style={[styles.userCol, styles.userInfo]}>
                  <View
                    style={[
                      styles.avatar,
                      {
                        width: 42 * s,
                        height: 42 * s,
                        borderRadius: 21 * s,
                      },
                    ]}
                  />
                  <View>
                    <Text style={[styles.td, { fontSize: 16 * s }]}>{u[1]}</Text>
                    <Text style={[styles.username, { fontSize: 16 * s }]}>{u[2]}</Text>
                  </View>
                </View>

                <Text style={[styles.td, styles.emailCol, { fontSize: 16 * s }]}>{u[3]}</Text>

                <View style={[styles.roleCol, styles.badgeWrap]}>
                  <Text
                    style={[
                      styles.badge,
                      roleColor(u[4]),
                      {
                        fontSize: 16 * s,
                        paddingHorizontal: 9 * s,
                        paddingVertical: 5 * s,
                      },
                    ]}
                  >
                    {u[4]}
                  </Text>
                </View>

                <View style={styles.dateCol}>
                  <Text style={[styles.td, { fontSize: 16 * s }]}>{u[5]}</Text>
                  <Text style={[styles.username, { fontSize: 16 * s }]}>{u[6]}</Text>
                </View>

                <View style={[styles.actionCol, styles.actionWrap]}>
                  <TouchableOpacity
                    onPress={() => openUserProfile(u)}
                    style={[
                      styles.profileButton,
                      {
                        height: 30 * s,
                        paddingHorizontal: 10 * s,
                        borderRadius: 5 * s,
                      },
                    ]}
                  >
                    <Eye size={15 * s} color="#34733B" />
                    <Text style={[styles.profileButtonText, { fontSize: 16 * s }]}>
                      View Profile
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => toggleFlagUser(u[0])}
                    style={[
                      styles.flagButton,
                      isFlagged && styles.flaggedButton,
                      {
                        width: 30 * s,
                        height: 30 * s,
                        borderRadius: 5 * s,
                      },
                    ]}
                  >
                    <Flag size={16 * s} color="#E53935" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}

          <View style={[styles.paginationRow, { padding: 18 * s }]}>
            <Text style={[styles.showing, { fontSize: 16 * s }]}>
              Showing 1 to 6 of 312 users
            </Text>
            <Text style={[styles.pagination, { fontSize: 16 * s }]}>
              ‹  1  2  3  ...  48  ›
            </Text>
          </View>
        </View>

        <Modal transparent visible={isAddAdminOpen} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={[styles.addAdminModal, { padding: 28 * s }]}>
              <View style={styles.addAdminLeft}>
                <Text style={[styles.addAdminTitle, { fontSize: 20 * s }]}>
                  Add New Administrator
                </Text>

                <Text style={[styles.addAdminSubtitle, { fontSize: 14 * s }]}>
                  Create a new administrator account. They will be able to access the system based on the assigned role and permissions.
                </Text>

                <View style={styles.formGrid}>
                  <AdminInput label="Full Name" placeholder="Enter full name" s={s} />
                  <AdminInput label="Email Address" placeholder="Enter email address" s={s} />
                  <AdminInput label="Contact Number" placeholder="Enter contact number" s={s} />
                  <AdminInput label="Username" placeholder="Enter username" s={s} />

                  <View>
                    <Text style={[styles.inputLabel, { fontSize: 14 * s }]}>Password</Text>
                    <View style={styles.inputBox}>
                      <TextInput
                        placeholder="Enter password"
                        placeholderTextColor="#777"
                        secureTextEntry={!showPassword}
                        style={[styles.inputText, { fontSize: 14 * s }]}
                      />
                      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Eye size={16 * s} color="#000" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View>
                    <Text style={[styles.inputLabel, { fontSize: 14 * s }]}>Confirm Password</Text>
                    <View style={styles.inputBox}>
                      <TextInput
                        placeholder="Confirm password"
                        placeholderTextColor="#777"
                        secureTextEntry={!showConfirmPassword}
                        style={[styles.inputText, { fontSize: 14 * s }]}
                      />
                      <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <Eye size={16 * s} color="#000" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <Text style={[styles.inputLabel, { fontSize: 14 * s, marginTop: 14 * s }]}>
                  Set as Super Admin
                </Text>

                <Text style={[styles.helperText, { fontSize: 13 * s }]}>
                  Super Admins have full access to all system features and can manage administrator accounts.
                </Text>

                <Text style={[styles.inputLabel, { fontSize: 14 * s, marginTop: 14 * s }]}>
                  Account Status
                </Text>

                <View style={styles.selectBox}>
                  <Text style={[styles.inputText, { fontSize: 14 * s }]}>Active⌄</Text>
                </View>
              </View>

              <View style={styles.addAdminRight}>
                <View style={styles.adminIllustration}>
                  <UsersRound size={110 * s} color="#34733B" />
                </View>

                <FeatureItem text="Administrator Account" s={s} />
                <FeatureItem text="Can access reports, users, events, and account management" s={s} />
                <FeatureItem text="Super Admins can manage administrators and system controls" s={s} />
              </View>

              <View style={styles.addAdminActions}>
                <TouchableOpacity
                  onPress={() => setIsAddAdminOpen(false)}
                  style={styles.cancelButton}
                >
                  <Text style={[styles.cancelButtonText, { fontSize: 14 * s }]}>
                    Cancel
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setIsAddAdminOpen(false)}
                  style={styles.createAdminButton}
                >
                  <Text style={[styles.createAdminButtonText, { fontSize: 14 * s }]}>
                    Create Administrator
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal transparent visible={isProfileOpen} animationType="fade">
          <View style={styles.modalOverlay}>
            <View
              style={[
                selectedUser && selectedUser[4] === "Admin"
                  ? styles.adminProfileModal
                  : styles.profileModal,
                { padding: 26 * s },
              ]}
            >
              <TouchableOpacity onPress={closeUserProfile} style={styles.closeButton}>
                <X size={24 * s} color="#000" />
              </TouchableOpacity>

              {selectedUser && selectedUser[4] === "Admin" ? (
                <View style={styles.modalContent}>
                  <View style={styles.modalLeft}>
                    <View
                      style={[
                        styles.profileAvatar,
                        {
                          width: 150 * s,
                          height: 150 * s,
                          borderRadius: 75 * s,
                        },
                      ]}
                    >
                      <Text style={[styles.avatarText, { fontSize: 38 * s }]}>
                        {selectedUser[1]
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </Text>
                    </View>

                    <Text style={[styles.profileName, { fontSize: 18 * s }]}>
                      {selectedUser[1]}
                    </Text>

                    <View style={styles.profileBadges}>
                      <Text
                        style={[
                          styles.badge,
                          roleColor(selectedUser[4]),
                          {
                            fontSize: 16 * s,
                            paddingHorizontal: 9 * s,
                            paddingVertical: 5 * s,
                          },
                        ]}
                      >
                        Admin
                      </Text>

                      <Text
                        style={[
                          styles.badge,
                          styles.activeBadge,
                          {
                            fontSize: 16 * s,
                            paddingHorizontal: 9 * s,
                            paddingVertical: 5 * s,
                          },
                        ]}
                      >
                        Active
                      </Text>
                    </View>

                    <View style={styles.profileInfoGroup}>
                      <ProfileInfoItem icon={Mail} label="Email" value={selectedUser[3]} s={s} />
                      <ProfileInfoItem icon={Phone} label="Contact Number" value="0912 123 54567" s={s} />
                      <ProfileInfoItem
                        icon={Calendar}
                        label="Date Registered"
                        value={`${selectedUser[5]} · ${selectedUser[6]}`}
                        s={s}
                      />
                    </View>
                  </View>

                  <View style={styles.adminActivityRight}>
                    <Text style={[styles.activeTab, { fontSize: 16 * s }]}>
                      Activity History
                    </Text>

                    <View style={[styles.activityHeader, { marginTop: 14 * s }]}>
                      <Text style={[styles.activityTh, styles.activityDateCol, { fontSize: 14 * s }]}>
                        Date & Time
                      </Text>
                      <Text style={[styles.activityTh, styles.activityActionCol, { fontSize: 14 * s }]}>
                        Action Performed
                      </Text>
                      <Text style={[styles.activityTh, styles.activityModuleCol, { fontSize: 14 * s }]}>
                        Module
                      </Text>
                      <Text style={[styles.activityTh, styles.activityRecordCol, { fontSize: 14 * s }]}>
                        Affected Record
                      </Text>
                      <Text style={[styles.activityTh, styles.activityDetailsCol, { fontSize: 14 * s }]}>
                        Details
                      </Text>
                      <Text style={[styles.activityTh, styles.activityViewCol, { fontSize: 14 * s }]}>
                        
                      </Text>
                    </View>

                    {[
                      ["May 26, 2026\n09:15 AM", "Approved Report", "Reports", "#R-2026-0123", "Marked as approved"],
                      ["May 26, 2026\n08:40 AM", "Rejected Event", "Events", "#E-2026-0079", "Reason: Incomplete Details"],
                      ["May 25, 2026\n03:10 PM", "Updated Report Status", "Reports", "#R-2026-0028", "Status changed to Resolved"],
                      ["May 25, 2026\n03:10 PM", "Flagged Report", "Reports", "#R-2026-0105", "Flagged Under Verification"],
                    ].map((item, index) => (
                      <View key={index} style={styles.activityRow}>
                        <Text style={[styles.activityTd, styles.activityDateCol, { fontSize: 14 * s }]}>
                          {item[0]}
                        </Text>

                        <Text style={[styles.activityTd, styles.activityActionCol, { fontSize: 14 * s }]}>
                          {item[1]}
                        </Text>

                        <View style={[styles.activityModuleCol, styles.badgeWrap]}>
                          <Text
                            style={[
                              styles.badge,
                              item[2] === "Events" ? styles.eventBadge : styles.reportBadge,
                              {
                                fontSize: 14 * s,
                                paddingHorizontal: 8 * s,
                                paddingVertical: 4 * s,
                              },
                            ]}
                          >
                            {item[2]}
                          </Text>
                        </View>

                        <Text style={[styles.activityTd, styles.activityRecordCol, { fontSize: 14 * s }]}>
                          {item[3]}
                        </Text>

                        <Text style={[styles.activityTd, styles.activityDetailsCol, { fontSize: 14 * s }]}>
                          {item[4]}
                        </Text>

                        <TouchableOpacity style={styles.activityViewButton}>
                          <Text style={[styles.activityViewText, { fontSize: 14 * s }]}>
                            View
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                </View>
              ) : selectedUser ? (
  <View style={styles.modalContent}>
    <View style={styles.modalLeft}>
      <View
        style={[
          styles.profileAvatar,
          {
            width: 150 * s,
            height: 150 * s,
            borderRadius: 75 * s,
          },
        ]}
      >
        <Text style={[styles.avatarText, { fontSize: 38 * s }]}>
          {selectedUser[1]
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </Text>
      </View>

      <Text style={[styles.profileName, { fontSize: 18 * s }]}>
        {selectedUser[1]}
      </Text>

      <View style={styles.profileBadges}>
        <Text
          style={[
            styles.badge,
            roleColor(selectedUser[4]),
            {
              fontSize: 16 * s,
              paddingHorizontal: 9 * s,
              paddingVertical: 5 * s,
            },
          ]}
        >
          {selectedUser[4]}
        </Text>

        <Text
          style={[
            styles.badge,
            styles.activeBadge,
            {
              fontSize: 16 * s,
              paddingHorizontal: 9 * s,
              paddingVertical: 5 * s,
            },
          ]}
        >
          Active
        </Text>
      </View>

      <View style={styles.profileInfoGroup}>
        <ProfileInfoItem icon={Mail} label="Email" value={selectedUser[3]} s={s} />
        <ProfileInfoItem icon={Phone} label="Contact Number" value="0912 123 54567" s={s} />
        <ProfileInfoItem
          icon={Calendar}
          label="Date Registered"
          value={`${selectedUser[5]} · ${selectedUser[6]}`}
          s={s}
        />
      </View>
    </View>

    <View style={styles.modalRight}>
      <View style={styles.modalTabs}>
        <Text style={[styles.activeTab, { fontSize: 16 * s }]}>
          Submitted Reports
        </Text>
        <Text style={[styles.inactiveTab, { fontSize: 16 * s }]}>
          Joined Events
        </Text>
      </View>

      {[
        ["Illegal Dumping near Riverside", "Pending", "May 26, 2026"],
        ["Water Pollution in Barangay Creek", "In Review", "May 26, 2026"],
        ["Illegal Logging in Forest Area", "Resolved", "May 25, 2026"],
      ].map((report, index) => (
        <View key={index} style={styles.modalReportRow}>
          <View style={[styles.smallImageBox, { width: 52 * s, height: 52 * s }]} />

          <View style={{ flex: 1 }}>
            <Text style={[styles.modalReportTitle, { fontSize: 16 * s }]}>
              {report[0]}
            </Text>
            <Text style={[styles.username, { fontSize: 16 * s }]}>
              Recent submitted report
            </Text>
          </View>

          <Text
            style={[
              styles.badge,
              statusColor(report[1]),
              {
                fontSize: 16 * s,
                paddingHorizontal: 9 * s,
                paddingVertical: 5 * s,
              },
            ]}
          >
            {report[1]}
          </Text>

          <Text style={[styles.modalDate, { fontSize: 16 * s }]}>
            {report[2]}
          </Text>
        </View>
      ))}

      <View style={styles.modalActions}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={[styles.editButtonText, { fontSize: 16 * s }]}>
            Edit User
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => toggleFlagUser(selectedUser[0])}
          style={[
            styles.flagUserButton,
            flaggedUsers.includes(selectedUser[0]) && styles.flaggedButton,
          ]}
        >
          <Text style={[styles.flagUserText, { fontSize: 16 * s }]}>
            {flaggedUsers.includes(selectedUser[0]) ? "Unflag User" : "Flag User"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
) : null}
            </View>
          </View>
        </Modal>
      </ScrollView>
    </AdminLayout>
  );
}

function AdminInput({ label, placeholder, s }: any) {
  return (
    <View>
      <Text style={[styles.inputLabel, { fontSize: 14 * s }]}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#777"
        style={[styles.inputBox, styles.inputText, { fontSize: 14 * s }]}
      />
    </View>
  );
}

function FeatureItem({ text, s }: any) {
  return (
    <View style={styles.featureItem}>
      <Check size={16 * s} color="#20B83B" />
      <Text style={[styles.featureText, { fontSize: 14 * s }]}>
        {text}
      </Text>
    </View>
  );
}

function ProfileInfoItem({ icon: Icon, label, value, s }: any) {
  return (
    <View style={styles.profileInfoItem}>
      <View style={[styles.profileInfoIconBox, { width: 24 * s, transform: [{ translateX: 18 * s }] }]}>
        <Icon size={30 * s} color="#000" />
      </View>

      <View style={styles.profileInfoTextBox}>
        <Text style={[styles.profileInfoLabel, { fontSize: 13 * s, transform: [{ translateX: 20 * s }] }]}>
          {label}
        </Text>
        <Text style={[styles.profileInfoValue, { fontSize: 16 * s, transform: [{ translateX: 20 * s }] }]}>
          {value}
        </Text>
      </View>
    </View>
  );
}

function roleColor(role: string) {
  if (role === "Admin") return { backgroundColor: "#C7DDFF", color: "#315BC9" };
  return { backgroundColor: "#BFEBC5", color: "#168A18" };
}

function statusColor(status: string) {
  if (status === "Pending") return { backgroundColor: "#FFF0B8", color: "#D99A00" };
  if (status === "In Review") return { backgroundColor: "#C7DDFF", color: "#315BC9" };
  return { backgroundColor: "#BFEBC5", color: "#168A18" };
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#ffffff" },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
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

  addButton: {
    backgroundColor: "#34733B",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  addButtonText: {
    fontFamily: "Montserrat_700Bold",
    color: "#fff",
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
    flex: 1.25,
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

  smallButton: {
    height: 36,
    minWidth: 82,
    borderWidth: 1,
    borderColor: "#34733B",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
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

  idCol: { width: "14%" },
  userCol: { width: "24%" },
  emailCol: { width: "22%" },
  roleCol: { width: "12%" },
  dateCol: { width: "16%" },
  actionCol: { width: "12%" },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    backgroundColor: "#d9d9d9",
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

  actionWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  profileButton: {
    borderWidth: 1,
    borderColor: "#34733B",
    backgroundColor: "#F5FFF4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  flagButton: {
    borderWidth: 1,
    borderColor: "#E53935",
    backgroundColor: "#FFF5F5",
    alignItems: "center",
    justifyContent: "center",
  },

  flaggedButton: {
    backgroundColor: "#f3464671",
  },

  profileButtonText: {
    fontFamily: "Montserrat_700Bold",
    color: "#34733B",
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

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    alignItems: "center",
    justifyContent: "center",
  },

  profileModal: {
    width: "35%",
    height: "55%",
    backgroundColor: "#fff",
    borderRadius: 12,
    position: "relative",
  },

  adminProfileModal: {
  width: "58%",
  minHeight: "45%",
  backgroundColor: "#fff",
  borderRadius: 12,
  position: "relative",
  },

  closeButton: {
    position: "absolute",
    top: 14,
    right: 18,
    zIndex: 10,
  },

  modalContent: {
    flexDirection: "row",
    marginTop: 50,
    gap: 35,
  },

  modalLeft: {
    width: "35%",
    alignItems: "center",
  },

  modalRight: {
    flex: 1,
  },

  profileAvatar: {
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontFamily: "Montserrat_700Bold",
    color: "#777",
  },

  profileName: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
    marginTop: 14,
  },

  profileBadges: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
  },

  activeBadge: {
    backgroundColor: "#BFEBC5",
    color: "#168A18",
  },

  profileInfoGroup: {
    width: "92%",
    marginTop: 18,
    alignSelf: "center",
  },

  profileInfoItem: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 14,
  },

  profileInfoIconBox: {
    alignItems: "center",
    marginTop: 2,
  },

  profileInfoTextBox: {
    flex: 1,
    marginLeft: 8,
  },

  profileInfoLabel: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

  profileInfoValue: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
    marginTop: 2,
  },

  modalTabs: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 16,
  },

  activeTab: {
    fontFamily: "Montserrat_700Bold",
    color: "#0B5A1E",
    borderBottomWidth: 2,
    borderBottomColor: "#0B5A1E",
    paddingBottom: 6,
  },

  inactiveTab: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

  modalReportRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 14,
  },

  smallImageBox: {
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },

  modalReportTitle: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

  modalDate: {
    fontFamily: "Montserrat_700Bold",
    color: "#000",
  },

  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    marginTop: 70,
  },

  editButton: {
    borderWidth: 1,
    borderColor: "#34733B",
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  editButtonText: {
    fontFamily: "Montserrat_700Bold",
    color: "#34733B",
  },

  flagUserButton: {
    borderWidth: 1,
    borderColor: "#FF3B3B",
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  flagUserText: {
    fontFamily: "Montserrat_700Bold",
    color: "#FF3B3B",
  },

  addAdminModal: {
  width: "48%",
  backgroundColor: "#fff",
  borderRadius: 12,
  flexDirection: "row",
  position: "relative",
},

addAdminLeft: {
  width: "58%",
},

addAdminRight: {
  flex: 1,
  paddingLeft: 24,
  justifyContent: "center",
},

addAdminTitle: {
  fontFamily: "Montserrat_700Bold",
  color: "#000",
},

addAdminSubtitle: {
  fontFamily: "Montserrat_700Bold",
  color: "#000",
  marginTop: 8,
  lineHeight: 20,
},

formGrid: {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 12,
  marginTop: 18,
},

inputLabel: {
  fontFamily: "Montserrat_700Bold",
  color: "#000",
  marginBottom: 6,
},

inputBox: {
  width: 190,
  height: 34,
  borderWidth: 1,
  borderColor: "#bdbdbd",
  borderRadius: 4,
  paddingHorizontal: 10,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},

inputText: {
  fontFamily: "Montserrat_700Bold",
  color: "#000",
  outlineStyle: "none" as any,
},

helperText: {
  fontFamily: "Montserrat_700Bold",
  color: "#444",
  lineHeight: 18,
},

selectBox: {
  width: 190,
  height: 34,
  borderWidth: 1,
  borderColor: "#bdbdbd",
  borderRadius: 4,
  justifyContent: "center",
  paddingHorizontal: 10,
},

adminIllustration: {
  height: 150,
  alignItems: "center",
  justifyContent: "center",
},

featureItem: {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: 8,
  marginTop: 12,
},

featureText: {
  flex: 1,
  fontFamily: "Montserrat_700Bold",
  color: "#000",
},

addAdminActions: {
  position: "absolute",
  right: 28,
  bottom: 24,
  flexDirection: "row",
  gap: 10,
},

cancelButton: {
  borderWidth: 1,
  borderColor: "#d6d6d6",
  borderRadius: 5,
  paddingHorizontal: 16,
  paddingVertical: 8,
},

cancelButtonText: {
  fontFamily: "Montserrat_700Bold",
  color: "#000",
},

createAdminButton: {
  backgroundColor: "#34733B",
  borderRadius: 5,
  paddingHorizontal: 16,
  paddingVertical: 8,
},

createAdminButtonText: {
  fontFamily: "Montserrat_700Bold",
  color: "#fff",
},

adminActivityRight: {
  flex: 1,
  paddingRight: 10,
},

activityHeader: {
  flexDirection: "row",
  borderBottomWidth: 1,
  borderBottomColor: "#d6d6d6",
  paddingBottom: 8,
  alignItems: "center",
},

activityRow: {
  flexDirection: "row",
  alignItems: "center",
  minHeight: 58,
  borderBottomWidth: 1,
  borderBottomColor: "#e6e6e6",
},

activityTh: {
  fontFamily: "Montserrat_700Bold",
  color: "#000",
},

activityTd: {
  fontFamily: "Montserrat_700Bold",
  color: "#000",
},

activityDateCol: {
  width: "17%",
},

activityActionCol: {
  width: "18%",
},

activityModuleCol: {
  width: "13%",
},

activityRecordCol: {
  width: "17%",
},

activityDetailsCol: {
  width: "24%",
},

activityViewCol: {
  width: "11%",
},

reportBadge: {
  backgroundColor: "#BFEBC5",
  color: "#168A18",
},

eventBadge: {
  backgroundColor: "#D7B9EA",
  color: "#6B168F",
},

activityViewButton: {
  width: "11%",
  borderWidth: 1,
  borderColor: "#34733B",
  backgroundColor: "#F5FFF4",
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 5,
},

activityViewText: {
  fontFamily: "Montserrat_700Bold",
  color: "#34733B",
},
});