import React, { useState } from 'react';
import './Signin.css';
import { signin, authenticate } from '../apis/auth';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import durbarlogo from '../images/durbar-logo.png';

import TextField from '@mui/material/TextField';

function Signin() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    error: false,
    success: false,
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const { username, password } = values;
    console.log('Trying to submit the form');
    setValues({ ...values, error: false, loading: true });
    signin({ username, password }).then((data) => {
      console.log('handleSubmit', data);
      if (data.err) {
        setValues({
          ...values,
          error: data.err,
          loading: false,
        });
      } else {
        authenticate(data, () => {
          setValues({
            username: '',
            password: '',
            redirect: true,
          });
          navigate('/');
        });
      }
    });
  };

  return (
    <div className="pageWrapper">
      <Navbar />
      <div className="pageFormWrapper">
        <div className="logoWrapper">
          <img src={durbarlogo} alt="logo" width={100} height={100} />
        </div>
        <div className="pageHeading">Members Signin</div>
        <div className="formContainer">
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="username"
              className="formInput"
              onChange={handleChange('username')}
            />
          </div>
          <div className="inputWrapper">
            <input
              type="password"
              placeholder="password"
              className="formInput"
              onChange={handleChange('password')}
            />
          </div>
          <div>
            <Link to="/signup" className="signupLinkWrapper">
              Not a member? Signup to be a member.
            </Link>
          </div>
          <br />
          <button onClick={(e) => submitForm(e)}>Signin</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
