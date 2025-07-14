import React from 'react';

const SettingsPage = () => (
  <div>
    <div className="mb-6">
      <h2 className="text-2xl font-bold">Settings</h2>
    </div>
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Store Information</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Store Name</label>
          <input className="border rounded px-3 py-2 w-full" placeholder="Trendora" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Contact Email</label>
          <input className="border rounded px-3 py-2 w-full" placeholder="admin@trendora.com" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Phone</label>
          <input className="border rounded px-3 py-2 w-full" placeholder="017XXXXXXXX" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  </div>
);

export default SettingsPage; 