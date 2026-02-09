import { useState } from "react";
import { markAttendance } from "../services/api";

export default function AttendanceForm({ employee }) {
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("Present");

    const submitAttendance = async () => {
    try {
        await markAttendance({
        employee_id: employee.id,
        date,
        status,
        });
        alert("Attendance marked");
    } catch {
        alert("Error marking attendance");
    }
    };

    return (
    <div>
        <h3>Mark Attendance for {employee.full_name}</h3>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Present</option>
        <option>Absent</option>
        </select>
        <button onClick={submitAttendance}>Submit</button>
    </div>
    );
}