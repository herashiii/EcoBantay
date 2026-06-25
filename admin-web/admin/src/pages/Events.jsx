import StatCard from "../components/StatCard";

export default function Events() {
  return (
    <section>
      <h1>Events</h1>
      <p className="page-subtitle">Manage environmental events and user-created event requests.</p>

      <div className="stats-grid">
        <StatCard title="Total Events" value="42" />
        <StatCard title="Pending Approval" value="7" />
        <StatCard title="Upcoming" value="15" />
        <StatCard title="Completed" value="20" />
      </div>

      <div className="panel">
        <div className="panel-header">
          <h2>Environmental Events</h2>
          <button className="primary-btn">Add Event</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Category</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th>Participants</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Casaroro Falls Trail Cleanup</td>
              <td>Environment</td>
              <td>June 20, 2026</td>
              <td>Valencia</td>
              <td><span className="badge approved">Upcoming</span></td>
              <td>15/50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}