import { useState } from "react";
import { addEmployee } from "../services/api";

export default function EmployeeForm({ refresh }) {
const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
});

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await addEmployee(form);
        alert("Employee added successfully");
        setForm({ employee_id: "", full_name: "", email: "", department: "" });
        refresh();
    } catch (err) {
        alert(err.response?.data?.detail || "Error adding employee");
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <h2>Add Employee</h2>
        <input name="employee_id" placeholder="Employee ID" value={form.employee_id} onChange={handleChange} required />
        <input name="full_name" placeholder="Full Name" value={form.full_name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
        <button>Add</button>
    </form>
    );
}