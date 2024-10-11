import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Este hook está bien aquí

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  // Asegúrate de que AuthProvider esté dentro de un <Router>

  const login = (username, password) => {
    if (username === '555-555-555' && password === 'adminpass') {
      setUser({ username, role: 'admin' });
      navigate('/dashboard');  // Navega después de iniciar sesión exitosamente
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate('/login');  // Navega de vuelta al login al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
