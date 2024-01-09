import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/Login.css';
import image from '../images/smart-serve-logo.png';

const Login = () => {
  const history = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidPassword = validatePassword(password);

    if (isValidPassword && password === 'SmartServTest@123') {
      localStorage.setItem('isLoggedIn', 'true');
      history('/dashboard');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;
    return passwordRegex.test(password);
  };

  const handleForgotPassword = () => {
    window.location.href = 'mailto:support@smartserv.io?subject=Password Reset Request';
  };

  return (
    <div className='login-parent'>
      <div className="login-container">
        <div className="login-card">
          <div className="logo">
            <img src={image} alt="Logo" />
          </div>
          <div className="input-container">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
          <div className="forgot-password">
            <a href="#" className="forgot-link" onClick={handleForgotPassword}>
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
