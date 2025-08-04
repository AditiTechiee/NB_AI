import React from 'react';
import 'leaflet/dist/leaflet.css'; // For map styling

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Extra from './Extra';
import Navbar from './Navbar';
import EmergencyContacts from './EmergencyContacts';
import Alerts from './Alerts';
import SafeZones from './SafeZones';
import ReportIncident from './ReportIncident';
import Profile from './Profile';

// AppRoutes handles navbar visibility and page routing
function AppRoutes() {
  const location = useLocation();

  // Hide navbar only on login & signup
  const hideNavbarOnRoutes = ['/login', '/signup'];
  const shouldShowNavbar = !hideNavbarOnRoutes.includes(location.pathname);

  return (
    <>
      {/* Navbar */}
      {shouldShowNavbar && <Navbar />}

      {/* Page Content */}
      <div className={shouldShowNavbar ? 'pt-16' : ''}>
        <Routes>
          {/* Redirect root to signup */}
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/safe-zones" element={<SafeZones />} />
          <Route path="/report-incident" element={<ReportIncident />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;