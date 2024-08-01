import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  // State variables to manage form data, success, and error messages
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to validate form data
  const validateForm = () => {
    if (!name.trim()) {
      return "Name is required.";
    }
    if (!/^[A-Za-z\s]+$/.test(name)) {
      return "Name must contain only alphabetic characters.";
    }
    if (!age || age < 1) {
      return "Age must be a positive number.";
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      return "A valid email address is required.";
    }
    return '';
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess('');
      return;
    }

    const formData = { name, age, email };

    try {
      const response = await axios.post('https://test-backend-2joc.onrender.com/api/register', formData);
      console.log(response);
      setSuccess('Registration successful!');
      setError('');
      // Clear form fields after success
      setName('');
      setAge('');
      setEmail('');
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.log(err);
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen p-8 flex items-start justify-start">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mt-20 ml-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Register</h2>
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">{success}</span>
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
              placeholder="Enter your name" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="age">Age</label>
            <input 
              type="number" 
              id="age" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
              placeholder="Enter your age" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
              placeholder="Enter your email" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-200 font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
