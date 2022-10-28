import React, { useState, useEffect } from 'react';
import './Card.css';
import { menuByDishType } from '../../apis/menu';

function Card({ dishType, indx }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    menuByDishType(dishType)
      .then((response) => setMenuItems(response.data))
      .catch((error) => console.log(error));
  }, []);

  const renderMenuItems = () => {
    if (menuItems.length) {
      return menuItems.map((item, i) => {
        return (
          <div className="item-wrapper" key={i}>
            {item.name}
          </div>
        );
      });
    }
    return '';
  };

  return (
    <div className="dish-type-container" key={indx}>
      {dishType}
      <div>{renderMenuItems()}</div>
    </div>
  );
}

export default Card;
