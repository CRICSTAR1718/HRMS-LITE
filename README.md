# HRMS Lite – Full Stack Web Application

## 📌 Project Overview

**HRMS Lite** is a lightweight, web-based Human Resource Management System designed to handle essential HR operations such as **employee management** and **attendance tracking**.  
The application simulates a basic internal HR tool with a clean user interface, RESTful backend APIs, and persistent database storage.

This project demonstrates **end-to-end full-stack development**, including frontend development, backend API design, database modeling, validation, error handling, and deployment.

---

## 🚀 Live Application

- **Frontend (Vercel):**  
  https://hrms-lite.vercel.app

- **Backend API (Render):**  
  https://hrms-backend.onrender.com

- **API Documentation (Swagger):**  
  https://hrms-backend.onrender.com/docs

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Axios
- CSS

### Backend
- FastAPI (Python)
- SQLAlchemy ORM
- Pydantic (Data Validation)

### Database
- SQLite (Local Development)
- PostgreSQL (Production)

### Deployment
- Frontend: Vercel
- Backend: Render
- Version Control: GitHub

---

## ✨ Features

### Employee Management
- Add new employees
- View list of employees
- Delete employees
- Validation for duplicate employee ID and email

### Attendance Management
- Mark daily attendance (Present / Absent)
- View attendance records per employee

### General Features
- RESTful API architecture
- Server-side validation
- Proper HTTP status codes
- Clean and professional UI
- Error handling and empty states

---

## 📂 Project Structure
HRMS-Lite/
├── backend/
│ ├── main.py
│ ├── database.py
│ ├── models.py
│ ├── schemas.py
│ ├── crud.py
│ ├── requirements.txt
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
└── README.md

---

## 📌 Assumptions & Limitations

- Single admin user (no authentication implemented)
- Payroll, leave management, and advanced HR features are intentionally out of scope
- Designed as a lightweight internal HR system
- Focused on stability, clean architecture, and usability

---

## Author
Adeela Azeez
