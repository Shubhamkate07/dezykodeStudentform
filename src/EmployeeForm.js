import React, { useState } from 'react';
import './App.css';


const EmployeeForm = () => {
  const [employee, setEmployee] = useState({ name: '', position: '', salary: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Details:', employee);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <h1>Employee Form</h1>
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={employee.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Position</label>
        <input
          type="text"
          name="position"
          className="form-control"
          value={employee.position}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Salary</label>
        <input
          type="number"
          name="salary"
          className="form-control"
          value={employee.salary}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default EmployeeForm;
