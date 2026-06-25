import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function AdminLayout({ children, activePage, setActivePage }) {
  return (
    <div className="admin-layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        <Topbar />
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}
