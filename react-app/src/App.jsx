import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Extra from './Extra';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root ("/") to /signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Home route */}
        <Route path="/home" element={<Home />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </Router>
  );
}

export default App;
