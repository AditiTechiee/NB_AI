import React, { useState, useEffect } from 'react';

const ReportIncident = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    file: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const loc = `${pos.coords.latitude}, ${pos.coords.longitude}`;
      setFormData((prev) => ({ ...prev, location: loc }));
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Incident submitted!');
    console.log(formData);
  };

  return (
    <div className="min-h-screen pt-28 px-6 md:px-20 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">📝 Report an Incident</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label className="block text-sm font-medium mb-1">Incident Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded text-sm"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Auto-detected Location</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded text-sm"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Upload Image (Optional)</label>
          <input
            name="file"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white font-semibold px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Submit Incident
        </button>
      </form>
    </div>
  );
};

export default ReportIncident;