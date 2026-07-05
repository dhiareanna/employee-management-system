-- Schema for the Employee Management System
CREATE TABLE IF NOT EXISTS employees (
  id SERIAL PRIMARY KEY,
  employee_id VARCHAR(50) UNIQUE NOT NULL,
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  department VARCHAR(100) NOT NULL, 
  designation VARCHAR(100) NOT NULL,
  salary NUMERIC(12,2) NOT NULL
); 
