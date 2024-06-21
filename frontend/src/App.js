import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
    return (
        <div className="App">
            <h1>Talent Verify</h1>
            <EmployeeForm />
            <EmployeeList />
        </div>
    );
}

export default App;
