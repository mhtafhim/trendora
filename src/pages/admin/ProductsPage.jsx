import React from 'react';

const ProductsPage = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Products</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
        + Add Product
      </button>
    </div>
    <div className="mb-4 flex gap-2">
      <input className="border rounded px-3 py-2" placeholder="Search products..." />
      <select className="border rounded px-3 py-2">
        <option>All Brands</option>
      </select>
      <select className="border rounded px-3 py-2">
        <option>All Categories</option>
      </select>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Brand</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2"><div className="w-12 h-12 bg-gray-100 rounded" /></td>
            <td className="px-4 py-2">Nike Air Max 270</td>
            <td className="px-4 py-2">Nike</td>
            <td className="px-4 py-2">৳8,000</td>
            <td className="px-4 py-2">12</td>
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

export default ProductsPage; 