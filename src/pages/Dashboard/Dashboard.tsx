import React from "react";
import "./Dashboard.css";
import logo from "../../assets/images/nextribe-logo.png"; 

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <img src={logo} alt="NexTribe Studios Logo" className="dashboard__logo" />
      <h1 className="dashboard__text">Coming Soon</h1>
    </div>
  );
};

export default Dashboard;
