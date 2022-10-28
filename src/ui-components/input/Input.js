import React from 'react';
import './Input.css';

function Input({ type, placeholder, name, value, disabled, handleChange }) {
  return (
    <div className="inputWrapper">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className="formInput"
        onChange={handleChange}
        disabled={disabled ? true : false}
      />
    </div>
  );
}

export default Input;
