import React from 'react';
import RegisterForm from '../components/PublicPages/RegisterForm';
import LoginPage from '../components/PublicPages/LoginPage';
import MyOrdersPage from '../components/PrivatePages/MyOrdersPage';
import ProductsAdmin from '../components/PrivatePages/ProductsAdmin';
import ProductsHomePage from '../components/PublicPages/ProductsHomePage';
import { Route, Routes } from 'react-router-dom';
import Auth from '../components/Auth';

export const routes = [
  { path: '/', element: <ProductsHomePage /> },
  { path: '/signup', element: <RegisterForm /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/cart', element: <Auth><MyOrdersPage /></Auth> },
  { path: '/adminproducts', element: <Auth><ProductsAdmin /></Auth> },
];
