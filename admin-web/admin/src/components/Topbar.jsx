import { Bell, Search, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="search-box">
        <Search size={18} />
        <input placeholder="Search..." />
      </div>

      <div className="topbar-right">
        <Bell size={20} />
        <div className="admin-profile">
          <UserCircle size={34} />
          <div>
            <strong>Maria Clara</strong>
            <p>Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}