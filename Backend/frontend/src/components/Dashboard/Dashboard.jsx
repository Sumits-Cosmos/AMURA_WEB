// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import { auth } from '../../firebase';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to your Dashboard</h1>
      <p>Logged in as: {auth.currentUser?.email}</p>
    </div>
  );
};

export default Dashboard;