from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
import crud
from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="HRMS Lite API",
    description="Lightweight HR Management System",
    version="1.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- Employee APIs ----------------

@app.post("/employees", response_model=schemas.EmployeeResponse)
def add_employee(employee: schemas.EmployeeCreate, db: Session = Depends(get_db)):
    new_employee = crud.create_employee(db, employee)
    if not new_employee:
        raise HTTPException(
            status_code=409,
            detail="Employee with same ID or email already exists"
        )
    return new_employee


@app.get("/employees", response_model=list[schemas.EmployeeResponse])
def list_employees(db: Session = Depends(get_db)):
    return crud.get_all_employees(db)


@app.delete("/employees/{employee_id}")
def remove_employee(employee_id: int, db: Session = Depends(get_db)):
    success = crud.delete_employee(db, employee_id)
    if not success:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )
    return {"message": "Employee deleted successfully"}


# ---------------- Attendance APIs ----------------

@app.post("/attendance", response_model=schemas.AttendanceResponse)
def add_attendance(attendance: schemas.AttendanceCreate, db: Session = Depends(get_db)):
    result = crud.mark_attendance(db, attendance)
    if not result:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )
    return result


@app.get("/attendance/{employee_id}", response_model=list[schemas.AttendanceResponse])
def view_attendance(employee_id: int, db: Session = Depends(get_db)):
    return crud.get_attendance_by_employee(db, employee_id)