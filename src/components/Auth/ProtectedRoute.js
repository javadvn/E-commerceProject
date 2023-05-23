import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { LocalStorageContext } from '../LocalStorageContext';

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useContext(LocalStorageContext);

  return (
    <Route
      {...rest}
      element={isLoggedIn ? (
        children
      ) : (
        <Navigate to="/login" replace />
      )}
    />
  );
}

export default ProtectedRoute;
