import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        department: '',
        name: '',
        employee_id: '',
        role: '',
        date_started: '',
        date_left: '',
        duties: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/employees/', formData)
            .then(response => {
                alert('Employee added successfully');
                setFormData({
                    company: '',
                    department: '',
                    name: '',
                    employee_id: '',
                    role: '',
                    date_started: '',
                    date_left: '',
                    duties: ''
                });
            })
            .catch(error => {
                console.error('There was an error adding the employee!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Company:</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />
            </div>
            <div>
                <label>Department:</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} required />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Employee ID:</label>
                <input type="text" name="employee_id" value={formData.employee_id} onChange={handleChange} required />
            </div>
            <div>
                <label>Role:</label>
                <input type="text" name="role" value={formData.role} onChange={handleChange} required />
            </div>
            <div>
                <label>Date Started:</label>
                <input type="date" name="date_started" value={formData.date_started} onChange={handleChange} required />
            </div>
            <div>
                <label>Date Left:</label>
                <input type="date" name="date_left" value={formData.date_left} onChange={handleChange} />
            </div>
            <div>
                <label>Duties:</label>
                <textarea name="duties" value={formData.duties} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default EmployeeForm;
