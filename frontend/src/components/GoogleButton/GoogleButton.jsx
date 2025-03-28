import React from 'react';
import styled from 'styled-components';
import { auth, googleProvider, signInWithPopup } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const GoogleButtonContainer = styled.button`
  background-color: white;
  color: #5f6368;
  border: 1px solid #dadce0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  margin-top: 20px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f8f9fa;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #f1f3f4;
    box-shadow: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #e8f0fe;
  }
`;

const GoogleLogo = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 12px;
`;

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard'); // Redirect after successful login
    } catch (error) {
      console.error('Google sign-in error:', error);
      // You can add error handling here (e.g., show toast notification)
    }
  };

  return (
    <GoogleButtonContainer onClick={handleGoogleSignIn}>
      <GoogleLogo 
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
        alt="Google logo" 
      />
      Continue with Google
    </GoogleButtonContainer>
  );
};

export default GoogleButton;