# Employee Management System (PERN Stack)

A full-stack Employee Management System developed using the **PERN Stack (PostgreSQL, Express.js, React.js, and Node.js)**. The application provides a simple and responsive interface for managing employee records through complete CRUD (Create, Read, Update, Delete) operations.

---

## Features

- Add new employees
- View all employee records
- Update employee information
- Delete employee records
- Search employees by Employee ID or Name
- Responsive Bootstrap user interface
- RESTful API integration
- PostgreSQL database connectivity
- MVC architecture for backend development

---

## Tech Stack

### Frontend
- React.js
- Bootstrap 5
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- PostgreSQL
- pg (Node PostgreSQL)
- dotenv
- CORS

---

## Project Structure

```
employee-management-system/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── db/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Database Setup

Create a PostgreSQL database named:

```sql
employee_management
```

Run the schema file:

```bash
psql -U postgres -d employee_management -f backend/db/schema.sql
```

---

## Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=employee_management
PORT=5000
```

Start the backend server:

```bash
npm start
```

The backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The frontend runs on:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/employees` | Retrieve all employees |
| GET | `/employees/:id` | Retrieve a single employee |
| POST | `/employees` | Create a new employee |
| PUT | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

---

## Application Features

- Employee registration
- Employee information management
- Search functionality
- Responsive design
- PostgreSQL database integration
- Error handling
- MVC architecture
- RESTful API implementation

---

## Learning Outcomes

Working on this project provided practical experience with:

- Building a full-stack web application using the PERN stack
- Designing and consuming REST APIs
- Performing CRUD operations with PostgreSQL
- Organizing backend code using the MVC architecture
- Connecting a React frontend with an Express backend
- Managing environment variables securely
- Using Git and GitHub for version control
- Debugging database connection and SQL-related issues

---

## Future Enhancements

- User authentication and authorization
- Employee profile image upload
- Dashboard with analytics and charts
- Department-wise filtering
- Pagination for employee records
- Export employee data to PDF or Excel
- Dark mode support

---

## Installation Summary

```bash
# Clone the repository
git clone https://github.com/dhiareanna/employee-management-system.git

# Backend
cd backend
npm install
npm start

# Frontend
cd ../frontend
npm install
npm start
```

---

## Author

**Dhia Reanna**

GitHub: https://github.com/dhiareanna

---

## License

This project is created for learning and educational purposes.
