// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamingForm from './components/GamingForm';
import CustomerDetails from './components/CustomerDetails';
import './styles/GamingForm.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GamingForm />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
