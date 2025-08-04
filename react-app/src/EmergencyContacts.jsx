import React, { useState } from 'react';
import { FiPhone, FiMail, FiUserPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';

function EmergencyContacts() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!/^\d{10}$/.test(form.phone)) errs.phone = 'Phone must be 10 digits';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    if (editIndex !== null) {
      const updated = [...contacts];
      updated[editIndex] = form;
      setContacts(updated);
      setEditIndex(null);
    } else {
      setContacts([...contacts, form]);
    }

    setForm({ name: '', phone: '', email: '' });
    setErrors({});
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setForm(contacts[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updated = [...contacts];
    updated.splice(index, 1);
    setContacts(updated);
    if (editIndex === index) setEditIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] to-[#f7f9ff] px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-700">📘 Emergency Contacts</h2>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setForm({ name: '', phone: '', email: '' });
              setEditIndex(null);
            }}
            className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700 transition"
          >
            <FiUserPlus className="mr-2" />
            {showForm ? 'Cancel' : 'Add Contact'}
          </button>
        </div>

        {/* Contact Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded p-6 mb-8 space-y-4 border border-indigo-100"
          >
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700 transition"
            >
              {editIndex !== null ? 'Update Contact' : 'Save Contact'}
            </button>
          </form>
        )}

        {/* Contacts Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.length === 0 ? (
            <p className="text-center text-gray-500 col-span-2">No contacts added yet.</p>
          ) : (
            contacts.map((c, i) => (
              <div key={i} className="bg-white p-4 shadow rounded border border-gray-100">
                <h3 className="text-lg font-semibold text-indigo-800">{c.name}</h3>
                <p className="flex items-center text-sm text-gray-700 mt-2">
                  <FiPhone className="mr-2" /> {c.phone}
                </p>
                <p className="flex items-center text-sm text-gray-700 mt-1">
                  <FiMail className="mr-2" /> {c.email}
                </p>
                <div className="mt-3 space-x-3">
                  <button
                    className="text-indigo-600 hover:underline text-sm"
                    onClick={() => handleEdit(i)}
                  >
                    <FiEdit2 className="inline mr-1" /> Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline text-sm"
                    onClick={() => handleDelete(i)}
                  >
                    <FiTrash2 className="inline mr-1" /> Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default EmergencyContacts;