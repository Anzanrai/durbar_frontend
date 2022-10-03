import React from 'react';
import './Input.css';

function Input({ type, placeholder, handleChange }) {
  return (
    <div className="inputWrapper">
      <input
        type={type}
        placeholder={placeholder}
        className="formInput"
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
