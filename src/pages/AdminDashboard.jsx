import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const overviewCards = [
  { title: 'Total Sales', value: '৳1,20,000', icon: (
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0h4m-4 0H8" /></svg>
  ) },
  { title: 'Orders', value: '320', icon: (
    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" /></svg>
  ) },
  { title: 'Users', value: '1,200', icon: (
    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 10-8 0 4 4 0 008 0zm6 2a4 4 0 10-8 0 4 4 0 008 0z" /></svg>
  ) },
  { title: 'Low Stock', value: '8', icon: (
    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ) },
];

const navLinks = [
  { name: 'Dashboard', path: '/admin' },
  { name: 'Products', path: '/admin/products' },
  { name: 'Orders', path: '/admin/orders' },
  { name: 'Users', path: '/admin/users' },
  { name: 'Brands', path: '/admin/brands' },
  { name: 'Categories', path: '/admin/categories' },
  { name: 'Sales', path: '/admin/sales' },
  { name: 'Reviews', path: '/admin/reviews' },
  { name: 'Newsletter', path: '/admin/newsletter' },
  { name: 'Settings', path: '/admin/settings' },
];

const AdminDashboardHome = () => (
  <>
    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-200">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg font-medium text-gray-700 hover:bg-gray-200">
          <span>Admin</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </button>
      </div>
    </div>
    {/* Overview Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {overviewCards.map(card => (
        <div key={card.title} className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <div className="bg-blue-50 rounded-full p-3">
            {card.icon}
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">{card.value}</div>
            <div className="text-gray-600 text-sm mt-1">{card.title}</div>
          </div>
        </div>
      ))}
    </div>
    {/* Charts & Recent Orders (Placeholders) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow p-6 min-h-[300px] flex flex-col justify-center items-center">
        <span className="text-gray-400">[Sales Chart Placeholder]</span>
      </div>
      <div className="bg-white rounded-xl shadow p-6 min-h-[300px] flex flex-col justify-center items-center">
        <span className="text-gray-400">[Recent Orders Table Placeholder]</span>
      </div>
    </div>
  </>
);

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="p-6 font-bold text-xl text-blue-700">Trendora Admin</div>
        <nav className="mt-8 flex flex-col gap-2">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-6 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`
              }
              end={link.path === '/admin'}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12">
        <Outlet />
      </main>
    </div>
  );
};

export { AdminDashboardHome };
export default AdminDashboard; 