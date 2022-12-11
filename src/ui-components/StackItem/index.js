import React from 'react';
import './StackItem.css';

function StackItem({ children }) {
  return <div className="container">{children}</div>;
}

export default StackItem;
