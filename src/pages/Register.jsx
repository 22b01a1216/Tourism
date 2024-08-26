import React, { useState } from 'react';
import '../styles/register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setSuccessMessage('');
        } else {
          setSuccessMessage(data.message);
          setError(null);
          // Redirect to login page or another page after success
          setTimeout(() => {
            navigate('/login');
          }, 2000); // Redirect after 2 seconds
        }
      })
      .catch((error) => {
        setError('There was an error making the request!');
        setSuccessMessage('');
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button type="submit" className="btn-register">
            Register
          </button>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <p>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
