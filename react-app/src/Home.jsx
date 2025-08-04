import React from 'react';
import { FiBell, FiPhoneCall, FiMapPin, FiAlertCircle, FiShield, FiFileText } from 'react-icons/fi';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom'; // ✅ Import Link

// ✅ Updated FeatureCard to accept a "to" prop
const FeatureCard = ({ icon: Icon, title, desc, to }) => (
  <Link to={to} className="flex flex-col items-start p-5 border rounded-lg shadow-sm bg-white hover:shadow-md transition hover:bg-indigo-50">
    <Icon className="text-indigo-600 text-xl mb-2" />
    <h4 className="font-semibold text-sm mb-1">{title}</h4>
    <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
  </Link>
);

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 px-4 md:px-16 pt-28 pb-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs px-3 py-1 bg-gray-200 rounded-full inline-block mb-4">Protection Status: Inactive</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Personal Safety Companion</h1>
          <p className="text-sm text-gray-600 mb-8">
            Activate your personal safety shield with a single tap. Guardian is here to ensure your peace of mind.
          </p>
          <button className="bg-red-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow hover:bg-red-700 transition">
            Start Protection
          </button>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-center mb-2">Enhance Your Safety</h2>
          <p className="text-center text-sm text-gray-500 mb-10">
            Explore key features designed to keep you secure and informed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FeatureCard
              icon={FiBell}
              title="Real-time Alerts"
              desc="Receive instant notifications for potential threats in your vicinity."
              to="/alerts"
            />
            <FeatureCard
              icon={FiPhoneCall}
              title="Emergency Contacts"
              desc="Quickly connect with your trusted contacts during emergencies."
              to="/emergency-contacts"
            />
            <FeatureCard
              icon={FiMapPin}
              title="Location Safety"
              desc="Share your live location with designated guardians for peace of mind."
              to="/safe-zones"
            />
            <FeatureCard
              icon={FiAlertCircle}
              title="Threat Detection"
              desc="Leverage AI-powered analysis to identify and mitigate risks."
              to="/alerts"
            />
            <FeatureCard
              icon={FiShield}
              title="Safe Zones Setup"
              desc="Define custom safe zones and get notified when you or loved ones enter/exit."
              to="/safe-zones"
            />
            <FeatureCard
              icon={FiFileText}
              title="Incident Reporting"
              desc="Submit detailed reports of incidents directly to relevant authorities."
              to="/report-incident"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;