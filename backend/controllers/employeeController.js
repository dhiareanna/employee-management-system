// Employee controller (MVC: Controller layer)
const Employee = require('../models/employeeModel');

// Simple validation helper
function validate(body) {
  const required = ['employee_id', 'full_name', 'email', 'department', 'designation', 'salary'];
  for (const k of required) {
    if (body[k] === undefined || body[k] === null || body[k] === '') {
      return `Field "${k}" is required`;
    }
  }
  if (!/^\S+@\S+\.\S+$/.test(body.email)) return 'Invalid email format';
  if (isNaN(Number(body.salary)) || Number(body.salary) < 0) return 'Salary must be a positive number';
  return null;
}

exports.getAll = async (req, res, next) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (err) { next(err); }
};

exports.getOne = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const error = validate(req.body);
    if (error) return res.status(400).json({ message: error });
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ message: 'Employee ID or email already exists' });
    }
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const error = validate(req.body);
    if (error) return res.status(400).json({ message: error });
    const employee = await Employee.update(req.params.id, req.body);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ message: 'Employee ID or email already exists' });
    }
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const ok = await Employee.remove(req.params.id);
    if (!ok) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee deleted successfully' });
  } catch (err) { next(err); }
};
