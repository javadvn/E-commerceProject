import React from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = true; 

  if (!isAuthenticated) {
    navigate('/login'); 
    return null;
  }

  return <>{children}</>;
};

export default Auth;
