import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('/api/employees/');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <p><strong>Name:</strong> {employee.name}</p>
                        <p><strong>Employee ID:</strong> {employee.employee_id}</p>
                        <p><strong>Role:</strong> {employee.role}</p>
                        <p><strong>Company:</strong> {employee.company}</p>
                        <p><strong>Department:</strong> {employee.department}</p>
                        <p><strong>Date Started:</strong> {employee.date_started}</p>
                        <p><strong>Date Left:</strong> {employee.date_left}</p>
                        <p><strong>Duties:</strong> {employee.duties}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
