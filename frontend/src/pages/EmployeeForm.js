import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee, getEmployee, updateEmployee } from '../services/api';

const empty = {
  employee_id: '', full_name: '', email: '',
  department: '', designation: '', salary: '',
};

export default function EmployeeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const editing = Boolean(id);
  const [form, setForm] = useState(empty);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!editing) return;
    (async () => {
      try {
        const { data } = await getEmployee(id);
        setForm(data);
      } catch {
        setError('Failed to load employee');
      }
    })();
  }, [id, editing]);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (editing) await updateEmployee(id, form);
      else await createEmployee(form);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Save failed');
    }
  };

  return (
    <div className="container">
      <h2>{editing ? 'Edit Employee' : 'Add Employee'}</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={onSubmit} className="row g-3">
        {[
          ['employee_id', 'Employee ID'],
          ['full_name', 'Full Name'],
          ['email', 'Email'],
          ['department', 'Department'],
          ['designation', 'Designation'],
          ['salary', 'Salary'],
        ].map(([name, label]) => (
          <div className="col-md-6" key={name}>
            <label className="form-label">{label}</label>
            <input
              className="form-control"
              type={name === 'salary' ? 'number' : name === 'email' ? 'email' : 'text'}
              name={name}
              value={form[name] ?? ''}
              onChange={onChange}
              required
            />
          </div>
        ))}
        <div className="col-12">
          <button type="submit" className="btn btn-primary me-2">
            {editing ? 'Update' : 'Create'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
