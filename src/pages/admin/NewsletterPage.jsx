import React from 'react';

const NewsletterPage = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Newsletter Subscribers</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
        + Add Subscriber
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Date Subscribed</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">subscriber@example.com</td>
            <td className="px-4 py-2">2024-06-01</td>
            <td className="px-4 py-2">
              <button className="text-red-600 hover:underline">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default NewsletterPage; 