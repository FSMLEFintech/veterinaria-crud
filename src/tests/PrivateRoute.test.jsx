import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';
import Dashboard from '../pages/Dashboard';
import { AuthProvider, useAuth } from '../context/AuthContext';

// Mock del contexto de autenticación
jest.mock('../context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('Pruebas de rutas protegidas', () => {
  test('Acceso permitido al dashboard para usuarios autenticados', () => {
    // Simular un usuario autenticado
    useAuth.mockReturnValue({ user: { username: 'admin', role: 'admin' } });

    const { getByText } = render(
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    );

    // Verificar que el Dashboard se renderiza correctamente
    expect(getByText('Bienvenido, admin')).toBeInTheDocument();
  });

  test('Redirigir al login si no hay usuario autenticado', () => {
    // Simular que no hay usuario autenticado
    useAuth.mockReturnValue({ user: null });

    const { getByText } = render(
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<div>Página de Login</div>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    );

    // Verificar que redirige al login
    expect(getByText('Página de Login')).toBeInTheDocument();
  });
});
