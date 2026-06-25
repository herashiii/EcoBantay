export default function Settings() {
  return (
    <section>
      <h1>Settings</h1>
      <p className="page-subtitle">Manage account and system preferences.</p>

      <div className="settings-grid">
        <div className="panel">
          <h2>System Information</h2>
          <label>System Name</label>
          <input value="EcoBantay" readOnly />
          <label>Admin Email</label>
          <input value="admin@ecobantay.com" readOnly />
        </div>

        <div className="panel">
          <h2>Account Security</h2>
          <label>Current Password</label>
          <input type="password" />
          <label>New Password</label>
          <input type="password" />
          <button className="primary-btn">Update Password</button>
        </div>
      </div>
    </section>
  );
}