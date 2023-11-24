import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
const Listusers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3700/users') 
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };
  return (
    <div>
        <Navbar/>
    <div className="container">
        <h2 className='titre'> Users</h2>
      <div className="centered-table">
        <table className="user-table" class="text-center phrase mb-0">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.Firstname}</td>
                <td>{user.Lastname}</td>
                <td>{user.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Listusers;
