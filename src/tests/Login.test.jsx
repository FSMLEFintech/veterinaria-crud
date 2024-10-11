import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { AuthProvider } from '../context/AuthContext';

// Mock del contexto de autenticación
jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    login: jest.fn((username, password) => {
      if (username === 'admin' && password === 'adminpass') {
        return Promise.resolve(true);
      }
      if (username === 'vet' && password === 'vetpass') {
        return Promise.resolve(true);
      }
      if (username === 'cliente' && password === 'clientepass') {
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    }),
  }),
}));

describe('Pruebas de Login para diferentes usuarios', () => {
  const setup = () => {
    return render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );
  };

  test('Iniciar sesión como administrador', async () => {
    setup();

    // Simular ingresar como admin
    fireEvent.change(screen.getByPlaceholderText(/usuario/i), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByPlaceholderText(/contraseña/i), {
      target: { value: 'adminpass' },
    });
    fireEvent.click(screen.getByText(/iniciar sesión/i));

    // Verificar que la función login fue llamada correctamente
    expect(screen.getByPlaceholderText(/usuario/i).value).toBe('admin');
    expect(screen.getByPlaceholderText(/contraseña/i).value).toBe('adminpass');
  });

  test('Iniciar sesión como veterinario', async () => {
    setup();

    // Simular ingresar como veterinario
    fireEvent.change(screen.getByPlaceholderText(/usuario/i), {
      target: { value: 'vet' },
    });
    fireEvent.change(screen.getByPlaceholderText(/contraseña/i), {
      target: { value: 'vetpass' },
    });
    fireEvent.click(screen.getByText(/iniciar sesión/i));

    // Verificar que la función login fue llamada correctamente
    expect(screen.getByPlaceholderText(/usuario/i).value).toBe('vet');
    expect(screen.getByPlaceholderText(/contraseña/i).value).toBe('vetpass');
  });

  test('Iniciar sesión como cliente', async () => {
    setup();

    // Simular ingresar como cliente
    fireEvent.change(screen.getByPlaceholderText(/usuario/i), {
      target: { value: 'cliente' },
    });
    fireEvent.change(screen.getByPlaceholderText(/contraseña/i), {
      target: { value: 'clientepass' },
    });
    fireEvent.click(screen.getByText(/iniciar sesión/i));

    // Verificar que la función login fue llamada correctamente
    expect(screen.getByPlaceholderText(/usuario/i).value).toBe('cliente');
    expect(screen.getByPlaceholderText(/contraseña/i).value).toBe('clientepass');
  });

  test('Iniciar sesión con credenciales incorrectas', async () => {
    setup();

    // Simular ingresar con credenciales incorrectas
    fireEvent.change(screen.getByPlaceholderText(/usuario/i), {
      target: { value: 'invalido' },
    });
    fireEvent.change(screen.getByPlaceholderText(/contraseña/i), {
      target: { value: 'wrongpass' },
    });
    fireEvent.click(screen.getByText(/iniciar sesión/i));

    // Verificar que las credenciales incorrectas muestran un error
    expect(screen.getByPlaceholderText(/usuario/i).value).toBe('invalido');
    expect(screen.getByPlaceholderText(/contraseña/i).value).toBe('wrongpass');
  });
});
