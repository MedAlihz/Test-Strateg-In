import React from 'react';
import './Navbar.css'; 
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  return (
    <div className="navbar">
      <div className="navbar-logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
