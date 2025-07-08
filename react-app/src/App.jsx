import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Routes path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
