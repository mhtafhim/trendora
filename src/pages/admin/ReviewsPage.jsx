import React from 'react';

const ReviewsPage = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Reviews</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Rating</th>
            <th className="px-4 py-2">Comment</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Nike Air Max 270</td>
            <td className="px-4 py-2">John Doe</td>
            <td className="px-4 py-2">5</td>
            <td className="px-4 py-2">Great shoes!</td>
            <td className="px-4 py-2"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Pending</span></td>
            <td className="px-4 py-2">
              <button className="text-green-600 hover:underline mr-2">Approve</button>
              <button className="text-red-600 hover:underline">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ReviewsPage; 