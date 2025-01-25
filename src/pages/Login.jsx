import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8082/api/v1/auth/authenticate', {
        email,
        password,
      });
      
      console.log(response)
      // Assuming the token is returned in the response as data.token
      const token = response.data.data.token;

      // Save the token in localStorage (or sessionStorage)
      localStorage.setItem('jwtToken', token);
      console.log(localStorage.getItem('jwtToken'));

      // Redirect to another page or fetch additional data
      // e.g., window.location.href = '/dashboard';
      console.log('Logged in successfully!');
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
