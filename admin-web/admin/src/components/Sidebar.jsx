import {
  LayoutDashboard,
  FileText,
  Users,
  CalendarDays,
  Download,
  Settings,
  LogOut,
  Leaf,
} from "lucide-react";

export default function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Reports", icon: FileText },
    { name: "Users", icon: Users },
    { name: "Events", icon: CalendarDays },
    { name: "Export Reports", icon: Download },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-section">
        <div className="logo-icon">
          <Leaf size={22} />
        </div>
        <div>
          <h2>EcoBantay</h2>
          <p>Admin Panel</p>
        </div>
      </div>

      <nav className="nav-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className={`nav-item ${activePage === item.name ? "active" : ""}`}
              onClick={() => setActivePage(item.name)}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <button className="logout-btn">
        <LogOut size={19} />
        <span>Logout</span>
      </button>
    </aside>
  );
}