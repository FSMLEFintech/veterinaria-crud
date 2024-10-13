// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();  // Obtener el usuario del contexto

  if (!user) {
    // Si no hay usuario logueado, redirigir a la página de login
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
