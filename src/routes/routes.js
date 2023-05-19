import DashBoard from "../components/PublicPages/DashBoard";
import ProductPage from "../components/PrivatePages/ProductPage";

import RegisterForm from "../components/PublicPages/RegisterForm";
import LoginPage from "../components/PublicPages/LoginPage";


export const routes= [
  {
      path:'/',
      element:<DashBoard/>
  },
  {
      path:'/signup',
      element:<RegisterForm/>
  },
{
    path:'/products',
    element:<ProductPage/>
},
{
    path:'/login',
    element:<LoginPage/>
},
]