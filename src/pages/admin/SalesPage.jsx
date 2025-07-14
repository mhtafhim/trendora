import React from 'react';

const SalesPage = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Sales</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
        + Add Sale
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Flash Sale</td>
            <td className="px-4 py-2">2024-06-01</td>
            <td className="px-4 py-2">2024-06-10</td>
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

export default SalesPage; 