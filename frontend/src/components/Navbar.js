import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">EMS</Link>
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Employees</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">Add Employee</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
