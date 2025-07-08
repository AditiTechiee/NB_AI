import React, { useState } from 'react';
import girlImage from './assets/girl-illustration.png'; // ✅ Correct path for your structure

function Login() {
  const [input, setInput] = useState('');

  const handleLogin = () => {
    if (!input) {
      alert('Please enter email or phone number.');
      return;
    }
    alert('Login successful!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-pink-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={girlImage}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
            Welcome to Nirbhaya AI
          </h2>

          <input
            type="text"
            placeholder="Email or Phone Number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
          >
            Login
          </button>

          <p className="text-center mt-4 text-sm text-gray-600">
            New user?{' '}
            <a href="/signup" className="text-purple-700 hover:underline font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
