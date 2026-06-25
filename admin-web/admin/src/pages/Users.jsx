import StatCard from "../components/StatCard";

export default function Users() {
  return (
    <section>
      <h1>User Management</h1>
      <p className="page-subtitle">View users and manage accounts based on access level.</p>

      <div className="stats-grid">
        <StatCard title="Total Users" value="304" />
        <StatCard title="Active Users" value="286" />
        <StatCard title="Flagged Users" value="5" />
        <StatCard title="Organizations" value="12" />
      </div>

      <div className="panel">
        <div className="panel-header">
          <h2>Registered Users</h2>
          <button className="primary-btn">Add Administrator</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Account Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Juan Dela Cruz</td>
              <td>juan@example.com</td>
              <td>Individual</td>
              <td><span className="badge approved">Active</span></td>
              <td>
                <button className="table-btn">View</button>
                <button className="warning-btn">Flag</button>
              </td>
            </tr>
            <tr>
              <td>Green Youth Org</td>
              <td>greenyouth@example.com</td>
              <td>Organization</td>
              <td><span className="badge pending">Flagged</span></td>
              <td>
                <button className="table-btn">View</button>
                <button className="warning-btn">Flag</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}