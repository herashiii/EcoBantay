import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <section>
      <h1>Dashboard</h1>
      <p className="page-subtitle">Overview of EcoBantay records and activities.</p>

      <div className="stats-grid">
        <StatCard title="Total Reports" value="128" note="Environmental reports" />
        <StatCard title="Reports In Review" value="18" note="Currently reviewed" />
        <StatCard title="Approved Events" value="12" note="Published events" />
        <StatCard title="Registered Users" value="304" note="Active community users" />
      </div>

      <div className="two-column">
        <div className="panel">
          <h2>Recent Reports</h2>
          <table>
            <thead>
              <tr>
                <th>Report</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fallen tree</td>
                <td>Brgy. Apolong</td>
                <td><span className="badge review">In Review</span></td>
              </tr>
              <tr>
                <td>Illegal dumping</td>
                <td>Brgy. Poblacion</td>
                <td><span className="badge pending">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="panel">
          <h2>Upcoming Events</h2>
          <div className="event-card">
            <h3>Casaroro Falls Trail Cleanup</h3>
            <p>June 20, 2026 • Valencia</p>
            <span className="badge approved">Upcoming</span>
          </div>
          <div className="event-card">
            <h3>Tree Planting Activity</h3>
            <p>June 28, 2026 • Brgy. Bongbong</p>
            <span className="badge approved">Approved</span>
          </div>
        </div>
      </div>
    </section>
  );
}