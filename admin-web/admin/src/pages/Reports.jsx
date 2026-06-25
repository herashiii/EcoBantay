import StatCard from "../components/StatCard";

export default function Reports() {
  return (
    <section>
      <h1>Reports</h1>
      <p className="page-subtitle">Review and manage submitted environmental reports.</p>

      <div className="stats-grid">
        <StatCard title="Total Reports" value="128" />
        <StatCard title="Pending" value="24" />
        <StatCard title="In Review" value="18" />
        <StatCard title="Resolved" value="86" />
      </div>

      <div className="panel">
        <div className="panel-header">
          <h2>Submitted Reports</h2>
          <button className="primary-btn">View Report</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Category</th>
              <th>Location</th>
              <th>Reported By</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>REP-001</td>
              <td>Infrastructure</td>
              <td>Brgy. Apolong</td>
              <td>Juan Dela Cruz</td>
              <td><span className="badge review">In Review</span></td>
              <td><button className="table-btn">View</button></td>
            </tr>
            <tr>
              <td>REP-002</td>
              <td>Waste</td>
              <td>Brgy. Poblacion</td>
              <td>Ana Santos</td>
              <td><span className="badge pending">Pending</span></td>
              <td><button className="table-btn">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}