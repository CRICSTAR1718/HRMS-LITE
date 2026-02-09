import { useEffect, useState } from "react";
import { getEmployees } from "./services/api";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>HRMS Lite</h1>

      <EmployeeForm refresh={loadEmployees} />
      <EmployeeList
        employees={employees}
        refresh={loadEmployees}
        selectEmployee={setSelectedEmployee}
      />

      {selectedEmployee && (
        <>
          <AttendanceForm employee={selectedEmployee} />
          <AttendanceList employee={selectedEmployee} />
        </>
      )}
    </div>
  );
}

export default App;