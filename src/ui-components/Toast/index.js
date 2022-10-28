import React, { useEffect, useState } from 'react';
import './Toast.css';
import CloseIcon from '@mui/icons-material/Close';

function Toast({ type, message, displayToast, setDisplayToast }) {
  const background = {
    error: '#d54c4c',
    success: '#b3eba1',
    info: '#7fc4fd',
  };
  const textcolor = {
    error: '#fff',
    success: '#358d19',
    info: '#0963ad',
  };

  const [bgColor, setBgColor] = useState('');
  const [txtColor, setTxtColor] = useState('');

  useEffect(() => {
    console.log('Type', type);
    setBgColor(background[type]);
    setTxtColor(textcolor[type]);
  }, [type]);

  const closeToast = () => {
    setDisplayToast(false);
  };

  return (
    <div className="toast-wrapper">
      <div
        className="wrapper"
        style={{
          background: bgColor,
          color: txtColor,
          display: displayToast ? '' : 'none',
        }}
      >
        <div className="cancel-button">
          <div onClick={closeToast} className="close-button">
            <CloseIcon fontSize={'small'} color={txtColor} />
          </div>
        </div>
        {message}
      </div>
    </div>
  );
}

export default Toast;
