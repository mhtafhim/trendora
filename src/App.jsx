import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import BrandsPage from './pages/BrandsPage';
import SalePage from './pages/SalePage';
import OrdersPage from './pages/OrdersPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminDashboard, { AdminDashboardHome } from './pages/AdminDashboard';
import ProductsPage from './pages/admin/ProductsPage';
import UsersPage from './pages/admin/UsersPage';
import CategoriesPage from './pages/admin/CategoriesPage';
import SalesPage from './pages/admin/SalesPage';
import ReviewsPage from './pages/admin/ReviewsPage';
import NewsletterPage from './pages/admin/NewsletterPage';
import SettingsPage from './pages/admin/SettingsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/products",
        element: <ProductListPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/brands",
        element: <BrandsPage />,
      },
      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
        children: [
          { path: '', element: <AdminDashboardHome /> },
          { path: 'products', element: <ProductsPage /> },
          { path: 'users', element: <UsersPage /> },
          { path: 'categories', element: <CategoriesPage /> },
          { path: 'sales', element: <SalesPage /> },
          { path: 'reviews', element: <ReviewsPage /> },
          { path: 'newsletter', element: <NewsletterPage /> },
          { path: 'settings', element: <SettingsPage /> },
        ]
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;