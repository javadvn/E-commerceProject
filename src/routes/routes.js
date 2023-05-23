import React from "react";
import { Route } from "react-router-dom";
import RegisterForm from "../components/PublicPages/RegisterForm";
import LoginPage from "../components/PublicPages/LoginPage";
import ProductsAdmin from "../components/PrivatePages/ProductsAdmin";
import ProductsHomePage from "../components/PublicPages/ProductsHomePage";

import BasketPage from "../components/PrivatePages/BasketPage";
import ProtectedRoute from "../components/Auth/ProtectedRoute";

export const PublicRoutes =[
{
path:"/",
element:<ProductsHomePage />
},
{
  path:"/signup",
  element:<RegisterForm />
  },
  {
    path:"/login",
    element:<LoginPage />
    },
]



export const PrivateRoutes = [
  {
    path:"/cart",
    element:<ProtectedRoute><BasketPage /></ProtectedRoute>
    },
   {path:"/adminproducts",
   element:<ProtectedRoute><ProductsAdmin /></ProtectedRoute>
  } 
]


