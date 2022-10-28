import React from 'react';
import './DropdownMenu.css';

function DropdownMenu({
  name,
  defaultValue,
  options,
  disabled,
  selectionChange,
}) {
  return (
    <div className="inputWrapper">
      <select
        className="select-item"
        name={name}
        onChange={selectionChange}
        disabled={disabled ? true : false}
      >
        <option>{defaultValue}</option>
        {options.map((option, indx) => {
          return (
            <option value={`${option}`} key={indx}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropdownMenu;
