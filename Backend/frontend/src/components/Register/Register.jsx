import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from "../../firebase";
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* ... existing form fields ... */}
      </form>
      
      <div className="toggle-form">
        Already have an account? 
        <button className="link-button" onClick={() => navigate('/login')}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;