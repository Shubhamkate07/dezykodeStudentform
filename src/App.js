import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentForm from './StudentForm';
import EmployeeForm from './EmployeeForm';
import './App.css';


function App() {
  return (
    <Router>
   
      <StudentForm/>
    </Router>
  );
}

export default App;
