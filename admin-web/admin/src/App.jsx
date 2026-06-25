import { useState } from "react";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Reports from "./pages/Reports.jsx";
import Users from "./pages/Users.jsx";
import Events from "./pages/Events.jsx";
import ExportReports from "./pages/ExportReports.jsx";
import Settings from "./pages/Settings.jsx";

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const pages = {
    Dashboard: <Dashboard />,
    Reports: <Reports />,
    Users: <Users />,
    Events: <Events />,
    "ExportReports": <ExportReports />,
    Settings: <Settings />,
  };

  return (
    <AdminLayout activePage={activePage} setActivePage={setActivePage}>
      {pages[activePage]}
    </AdminLayout>
  );
}