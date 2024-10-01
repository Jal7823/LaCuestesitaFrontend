// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../reducer/users/usersSlice'; // Ajusta la ruta si es necesario

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Aquí deberías hacer la llamada al backend para autenticar al usuario
    // y obtener el token. Este es un ejemplo básico.
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token; // Ajusta según la estructura de tu respuesta del backend

        // Despachar la acción para guardar el token en Redux
        dispatch(setToken({ token }));
      } else {
        // Manejar errores
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
