import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'; 

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    Email: '',
    Password: '',
  });
  const navigate = useNavigate();

  const { Firstname, Lastname, Email, Password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3700/register', {
        Firstname,
        Lastname,
        Email,
        Password,
      });

      console.log(response.data); 
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  };

  return (
    <div>      <h2 className='titre'> Create Account</h2>
    
    <form onSubmit={onSubmit} className="form-container">
        
      <input type="text" placeholder="Firstname" name="Firstname" value={Firstname} onChange={onChange} />
      <input type="text" placeholder="Lastname" name="Lastname" value={Lastname} onChange={onChange} />
      <input type="email" placeholder="Email" name="Email" value={Email} onChange={onChange} />
      <input type="password" placeholder="Password" name="Password" value={Password} onChange={onChange} />
      <button class="animated_div " type="submit" name="submit_reg">Register</button>
      <p class="text-center phrase mb-0">Already have an Account? <a href="/login">Login</a></p>

    </form>
    </div>
  );
};

export default RegisterForm;
