import React from 'react';

const UsersPage = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Users</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
        + Add User
      </button>
    </div>
    <div className="mb-4 flex gap-2">
      <input className="border rounded px-3 py-2" placeholder="Search users..." />
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">John Doe</td>
            <td className="px-4 py-2">john@example.com</td>
            <td className="px-4 py-2">01712345678</td>
            <td className="px-4 py-2">Admin</td>
            <td className="px-4 py-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded">Active</span></td>
            <td className="px-4 py-2">
              <button className="text-blue-600 hover:underline mr-2">Edit</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default UsersPage; 