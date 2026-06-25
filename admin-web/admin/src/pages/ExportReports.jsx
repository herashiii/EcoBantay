export default function ExportReports() {
  return (
    <section>
      <h1>Export Reports</h1>
      <p className="page-subtitle">Export environmental report records for documentation.</p>

      <div className="export-grid">
        <div className="panel">
          <h2>Export Filters</h2>

          <label>Date Range</label>
          <div className="form-row">
            <input type="date" />
            <input type="date" />
          </div>

          <label>Report Status</label>
          <select>
            <option>All Status</option>
            <option>Pending</option>
            <option>In Review</option>
            <option>Resolved</option>
          </select>

          <label>Report Category</label>
          <select>
            <option>All Categories</option>
            <option>Infrastructure</option>
            <option>Waste</option>
            <option>Illegal Logging</option>
            <option>Wildlife Concern</option>
          </select>
        </div>

        <div className="panel">
          <h2>File Format</h2>
          <div className="format-grid">
            {["PDF", "Excel", "CSV", "Word", "JSON"].map((format) => (
              <button key={format} className="format-btn">{format}</button>
            ))}
          </div>

          <label>File Name</label>
          <input placeholder="ecobantay_reports_2026" />

          <button className="primary-btn full">Generate Export</button>
        </div>
      </div>
    </section>
  );
}