import React, { useState } from 'react';
import './Signup.css';
import { signup } from '../apis/auth';
import Navbar from '../components/Navbar';
import durbarlogo from '../images/durbar-logo.png';
import Footer from '../components/Footer';

function Signup() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const handleInput = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { username, email, password } = values;
    signup({ username, email, password }).then((data) => {
      if (data.err) {
        setValues({
          ...values,
          error: data.err,
          success: false,
        });
      } else {
        setValues({
          username: '',
          email: '',
          password: '',
          error: false,
          success: true,
        });
      }
    });
    console.log('Trying to submit the form', values);
  };

  return (
    <div className="pageWrapper">
      <Navbar />
      <div className="pageFormWrapper">
        <div className="logoWrapper">
          <img src={durbarlogo} alt="logo" width={100} height={100} />
        </div>
        <div className="pageHeading">Signup</div>
        <div className="formContainer">
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="username"
              className="formInput"
              onChange={handleInput('username')}
            />
          </div>
          <div className="inputWrapper">
            <input
              type="text"
              placeholder="email"
              className="formInput"
              onChange={handleInput('email')}
            />
          </div>
          <div className="inputWrapper">
            <input
              type="password"
              placeholder="password"
              className="formInput"
              onChange={handleInput('password')}
            />
          </div>
          <button className="inputWrapper" onClick={(e) => submitForm(e)}>
            Signup
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
