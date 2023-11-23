import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3700/login', {
        Email: email,
        Password: password,
      });

      const { token } = response.data;

      localStorage.setItem('token', token);
    
        navigate('/users');
 
    } catch (error) {
      setError('Email or password incorrect');
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h2 className='titre'> Login</h2>

      <form className="form-container" onSubmit={handleLogin}>
        <div>
          <label class="text-center phrase mb-0" >Email:</label>
          <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label class="text-center phrase mb-0">Password:</label>
          <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button class="animated_div " type="submit">Login</button>
        <p class="text-center phrase mb-0">Don't have an Account? <a href="/register">Sign Up</a></p>
 
      </form>
    </div>
  );
};

export default LoginForm;
