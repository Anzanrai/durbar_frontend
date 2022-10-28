import React from 'react';
import './FileInput.css';

function FileInput({ name, disabled, handleFileChange }) {
  return (
    <div className="input-wrapper">
      {/* {value ? `Selected File: ${value}` : null} */}
      <input
        className="file-input"
        type="file"
        name={name}
        onChange={handleFileChange}
        disabled={disabled ? true : false}
      />
    </div>
  );
}

export default FileInput;
