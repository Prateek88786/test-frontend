import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://test-backend-2joc.onrender.com/api/users');
        console.log(response.data)
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">User Data</h2>
        <table className="w-full table-auto bg-white border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="p-3 border-b border-r border-gray-700 text-center">Name</th>
              <th className="p-3 border-b border-r border-gray-700 text-center">Age</th>
              <th className="p-3 border-b border-gray-700 text-center">Email</th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              userData.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border-b border-r border-gray-700 text-center">{user.name}</td>
                  <td className="p-3 border-b border-r border-gray-700 text-center">{user.age}</td>
                  <td className="p-3 border-b border-gray-700 text-center">{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 text-center" colSpan="3">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
