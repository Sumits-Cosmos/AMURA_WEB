import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  googleProvider 
} from '../../firebase';
import GoogleButton from '../GoogleButton/GoogleButton';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* ... existing form fields ... */}
      </form>
      
      <div className="divider">OR</div>
      
      <GoogleButton onClick={handleGoogleLogin} />
      
      <div className="toggle-form">
        Don't have an account? 
        <button className="link-button" onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;