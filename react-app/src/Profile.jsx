import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Aditya Raj',
    email: 'aditya@example.com',
    phone: '9876543210',
  });

  const [password, setPassword] = useState({ current: '', newPass: '' });

  const [alertSettings, setAlertSettings] = useState({
    crimeAlerts: true,
    naturalDisasters: true,
    curfew: false,
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleToggle = (type) => {
    setAlertSettings((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    alert('Profile updated!');
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    alert('Password changed!');
  };

  return (
    <div className="min-h-screen pt-28 px-6 md:px-20 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">👤 User Profile & Settings</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* Profile Info */}
        <form onSubmit={handleSubmitProfile} className="bg-white p-6 rounded shadow space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Edit Profile</h3>

          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="w-full border p-2 rounded text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full border p-2 rounded text-sm"
              type="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              className="w-full border p-2 rounded text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Profile
          </button>
        </form>

        {/* Password & Alert Settings */}
        <div className="space-y-8">
          <form onSubmit={handleSubmitPassword} className="bg-white p-6 rounded shadow space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Change Password</h3>

            <div>
              <label className="block text-sm font-medium">Current Password</label>
              <input
                name="current"
                type="password"
                value={password.current}
                onChange={handlePasswordChange}
                className="w-full border p-2 rounded text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">New Password</label>
              <input
                name="newPass"
                type="password"
                value={password.newPass}
                onChange={handlePasswordChange}
                className="w-full border p-2 rounded text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Update Password
            </button>
          </form>

          <div className="bg-white p-6 rounded shadow space-y-3">
            <h3 className="text-lg font-semibold text-gray-700">Alert Preferences</h3>

            {Object.entries(alertSettings).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <label className="capitalize text-sm text-gray-600">{key.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleToggle(key)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;