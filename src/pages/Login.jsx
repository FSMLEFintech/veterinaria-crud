import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';  // Asegúrate de crear este archivo CSS con los estilos

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate('/dashboard'); // Redirigir al dashboard
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img src="/logo.png" alt="Logo de Gatopolis" className="logo" />
          <h2>¡Bienvenido a Gatopolis!</h2>
          <p>Inicia sesión para cuidar de tus amigos felinos</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
        <div className="login-footer">
          <p>¿Olvidaste tu contraseña? <a href="/reset">Recupérala aquí</a></p>
        </div>
      </div>
    </div>
  );
}
