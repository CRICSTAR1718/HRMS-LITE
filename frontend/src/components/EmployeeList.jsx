import { deleteEmployee } from "../services/api";

export default function EmployeeList({ employees, refresh, selectEmployee }) {
    return (
    <div>
        <h2>Employees</h2>

        {employees.length === 0 && <p>No employees found</p>}

        <ul>
        {employees.map((emp) => (
            <li key={emp.id}>
            <strong>{emp.full_name}</strong> ({emp.department})
            <br />
            <button onClick={() => selectEmployee(emp)}>Attendance</button>
            <button onClick={() => {
                deleteEmployee(emp.id);
                refresh();
            }}>
                Delete
            </button>
            </li>
        ))}
        </ul>
    </div>
    );
}