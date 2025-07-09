import React from 'react';
import Sidebar from './components/Sidebar';

const Extra = () => {
  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Safety Alerts & Preferences</h2>

        {/* Overall Safety Status */}
        <div className="bg-white rounded-xl p-5 shadow mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Overall Safety Status</h3>
            <button className="text-blue-600 font-medium hover:underline">View Detailed Report</button>
          </div>
          <p className="text-sm text-gray-500 mb-3">75% of recommended features enabled.</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-500 h-2 rounded-full w-[75%]"></div>
          </div>
        </div>

        {/* Core Safety Features */}
        <div className="bg-white rounded-xl p-5 shadow mb-6">
          <h3 className="font-semibold text-lg mb-4">Core Safety Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FeatureCard name="Voice Detection" active />
            <FeatureCard name="Sound Alarm" active />
            <FeatureCard name="Camera Access" />
            <FeatureCard name="Vibration Alerts" active />
          </div>
        </div>

        {/* Advanced Alert Customization */}
        <div className="bg-white rounded-xl p-5 shadow">
          <h3 className="font-semibold text-lg mb-4">Advanced Alert Customization</h3>

          <label className="text-sm text-gray-700 font-medium">Alert Intensity</label>
          <input type="range" min="0" max="100" value="75" className="w-full mt-2 mb-4" />

          <label className="block mb-2 text-sm text-gray-700 font-medium">Custom Alert Sounds</label>
          <label className="inline-flex items-center space-x-2 text-sm">
            <input type="checkbox" className="form-checkbox rounded" />
            <span>Enable Quiet Hours</span>
          </label>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ name, active }) => (
  <div className="p-4 rounded-xl border shadow-sm bg-gray-100 text-center">
    <h4 className="font-medium text-sm mb-2">{name}</h4>
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" defaultChecked={active} className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-300 peer-checked:bg-red-500 rounded-full relative transition-all duration-200">
        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-transform"></div>
      </div>
    </label>
  </div>
);

export default Extra;
