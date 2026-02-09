import { useEffect, useState } from "react";
import { getAttendance } from "../services/api";

export default function AttendanceList({ employee }) {
    const [records, setRecords] = useState([]);

    useEffect(() => {
    getAttendance(employee.id).then((res) => setRecords(res.data));
    }, [employee]);

    return (
    <div>
        <h3>Attendance Records</h3>

        {records.length === 0 && <p>No attendance marked</p>}

        <ul>
        {records.map((rec) => (
            <li key={rec.id}>
            {rec.date} – {rec.status}
            </li>
        ))}
        </ul>
    </div>
    );
}