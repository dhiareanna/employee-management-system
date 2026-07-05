// Employee model — all DB queries live here (MVC: Model layer)
const pool = require('../config/db');

const EmployeeModel = {
  async findAll() {
    const { rows } = await pool.query('SELECT * FROM employees ORDER BY id DESC');
    return rows;
  },

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM employees WHERE id = $1', [id]);
    return rows[0];
  },

  async create({ employee_id, full_name, email, department, designation, salary }) {
    const { rows } = await pool.query(
      `INSERT INTO employees (employee_id, full_name, email, department, designation, salary)
       VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [employee_id, full_name, email, department, designation, salary]
    );
    return rows[0];
  },

  async update(id, { employee_id, full_name, email, department, designation, salary }) {
    const { rows } = await pool.query(
      `UPDATE employees
       SET employee_id=$1, full_name=$2, email=$3, department=$4, designation=$5, salary=$6
       WHERE id=$7 RETURNING *`,
      [employee_id, full_name, email, department, designation, salary, id]
    );
    return rows[0];
  },

  async remove(id) {
    const { rowCount } = await pool.query('DELETE FROM employees WHERE id = $1', [id]);
    return rowCount > 0;
  },
};

module.exports = EmployeeModel;
