import React from 'react';

const CategoriesPage = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Categories</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
        + Add Category
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Parent</th>
            <th className="px-4 py-2">Sort Order</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Sneakers</td>
            <td className="px-4 py-2">Shoes</td>
            <td className="px-4 py-2">1</td>
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

export default CategoriesPage; 