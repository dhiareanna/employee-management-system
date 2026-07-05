import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEmployees, deleteEmployee } from '../services/api';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const load = async () => {
    try {
      const { data } = await getEmployees();
      setEmployees(data);
    } catch (e) {
      setError('Failed to load employees');
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this employee?')) return;
    try {
      await deleteEmployee(id);
      load();
    } catch {
      alert('Delete failed');
    }
  };

  const filtered = employees.filter((e) => {
    const q = search.toLowerCase();
    return (
      e.employee_id.toLowerCase().includes(q) ||
      e.full_name.toLowerCase().includes(q)
    );
  });

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h2>Employees</h2>
        <Link to="/add" className="btn btn-success">+ Add Employee</Link>
      </div>

      <input
        className="form-control mb-3"
        placeholder="Search by Employee ID or Name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>Employee ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th style={{ width: 160 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan="7" className="text-center text-muted">No employees found</td></tr>
            ) : filtered.map((e) => (
              <tr key={e.id}>
                <td>{e.employee_id}</td>
                <td>{e.full_name}</td>
                <td>{e.email}</td>
                <td>{e.department}</td>
                <td>{e.designation}</td>
                <td>{Number(e.salary).toLocaleString()}</td>
                <td>
                  <Link to={`/edit/${e.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                  <button onClick={() => handleDelete(e.id)} className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
