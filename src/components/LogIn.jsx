import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://strangers-things.herokuapp.com/api/users/login', {
        user: {
          email,
          password,
        },
      });
      console.log('Login successful!', response.data.data);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  
  console.log('Email:', email);
  console.log('Password:', password);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;


