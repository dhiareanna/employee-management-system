import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeList from './pages/EmployeeList';
import EmployeeForm from './pages/EmployeeForm';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add" element={<EmployeeForm />} />
        <Route path="/edit/:id" element={<EmployeeForm />} />
        <Route path="*" element={<div className="container"><h3>Page not found</h3></div>} />
      </Routes>
    </>
  );
}
