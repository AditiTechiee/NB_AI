import React, { useState, useEffect } from 'react';

const dummyAlerts = [
  "🚨 Suspicious activity reported near your location.",
  "⚠ Curfew imposed in Sector 7 due to safety concerns.",
  "🔔 Woman reported harassment near ABC Park.",
  "📢 Police patrols increased in XYZ area.",
  "🚨 Unidentified person loitering near your building.",
];

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Simulate new alerts being pushed every 3 seconds
    let index = 0;
    const interval = setInterval(() => {
      if (index < dummyAlerts.length) {
        setAlerts((prev) => [dummyAlerts[index], ...prev]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-28 px-6 md:px-20 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-red-700 text-center">🔴 Real-time Alerts</h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {alerts.length === 0 ? (
          <p className="text-center text-gray-400">No alerts yet...</p>
        ) : (
          alerts.map((alert, index) => (
            <div key={index} className="bg-white border-l-4 border-red-600 shadow p-4 rounded">
              <p className="text-sm text-gray-700">{alert}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Alerts;