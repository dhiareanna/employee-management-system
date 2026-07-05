# Employee Management System (PERN Stack)

A complete Employee Management System built with PostgreSQL, Express.js, React.js, and Node.js.

## Features
- Add, View, Edit, Delete employees
- Search by Employee ID or Name
- Responsive Bootstrap UI
- MVC architecture on the backend

## Project Structure
```
ems/
├── backend/        # Node.js + Express + PostgreSQL API
└── frontend/       # React.js client (Bootstrap + Axios)
```

## Prerequisites
- Node.js >= 16
- PostgreSQL >= 12

## 1. Database Setup
Create a PostgreSQL database named `employee_management`, then run the schema:

```bash
psql -U postgres -c "CREATE DATABASE employee_management;"
psql -U postgres -d employee_management -f backend/db/schema.sql
```

## 2. Backend Setup
```bash
cd backend
cp .env.example .env       # then edit DB credentials
npm install
npm run dev                # starts API on http://localhost:5000
```

### API Endpoints
| Method | Endpoint          | Description           |
|--------|-------------------|-----------------------|
| GET    | /employees        | List all employees    |
| GET    | /employees/:id    | Get a single employee |
| POST   | /employees        | Create employee       |
| PUT    | /employees/:id    | Update employee       |
| DELETE | /employees/:id    | Delete employee       |

## 3. Frontend Setup
```bash
cd frontend
npm install
npm start                  # opens http://localhost:3000
```

The frontend talks to the backend at `http://localhost:5000` (configurable via `REACT_APP_API_URL`).

## Notes
- Backend uses async/await, validation, and centralized error handling.
- Delete actions require confirmation.
