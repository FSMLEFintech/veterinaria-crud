import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);  // Aquí almacenaremos al usuario con su rol

  const login = (username, password) => {
    // Simulación de autenticación con roles
    if (username === 'admin' && password === '12345') {
      setUser({ username, role: 'admin' });
      return true;
    } else if (username === 'vet' && password === '12345') {
      setUser({ username, role: 'vet' });
      return true;
    } else if (username === 'cliente' && password === '12345') {
      setUser({ username, role: 'cliente' });
      return true;
    } else if (username === 'coordinador' && password === '12345') {
      setUser({ username, role: 'coordinador' });
      return true;
    } else if (username === 'chofer' && password === '12345') {
      setUser({ username, role: 'chofer' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
