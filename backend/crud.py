from sqlalchemy.orm import Session
from models import Employee, Attendance
from schemas import EmployeeCreate, AttendanceCreate

# ---------------- Employee ----------------

def create_employee(db: Session, employee: EmployeeCreate):
    existing = db.query(Employee).filter(
        (Employee.employee_id == employee.employee_id) |
        (Employee.email == employee.email)
    ).first()

    if existing:
        return None

    new_employee = Employee(
        employee_id=employee.employee_id,
        full_name=employee.full_name,
        email=employee.email,
        department=employee.department
    )
    db.add(new_employee)
    db.commit()
    db.refresh(new_employee)
    return new_employee


def get_all_employees(db: Session):
    return db.query(Employee).all()


def delete_employee(db: Session, employee_id: int):
    employee = db.query(Employee).filter(Employee.id == employee_id).first()
    if not employee:
        return False
    db.delete(employee)
    db.commit()
    return True


# ---------------- Attendance ----------------

def mark_attendance(db: Session, attendance: AttendanceCreate):
    employee = db.query(Employee).filter(Employee.id == attendance.employee_id).first()
    if not employee:
        return None

    new_attendance = Attendance(
        employee_id=attendance.employee_id,
        date=attendance.date,
        status=attendance.status
    )
    db.add(new_attendance)
    db.commit()
    db.refresh(new_attendance)
    return new_attendance


def get_attendance_by_employee(db: Session, employee_id: int):
    return db.query(Attendance).filter(
        Attendance.employee_id == employee_id
    ).all()