import React, { useState } from 'react';
import './AddMenu.css';
import './AdminDashboard.css';
import AdminpageHeader from '../components/AdminpageHeader';
import AdminLeftPane from '../components/AdminLeftPane';
import CloseIcon from '@mui/icons-material/Close';
import Input from '../ui-components/input/Input';

function AddMenu() {
  const [menuItems, setMenuItems] = useState({
    'Entree and Side': [
      'Samosa',
      'Choila',
      'Bhatmas Sadheko',
      'Aloo Sadheko',
      'Aloo Chop',
      'Somosa Chat',
      'Paneer Chilli',
      'Chips Chilli',
      'Chana Chatpate',
      'Sekuwa',
    ],
    'Durbar Special': [],
    'Main Course': [],
    Drinks: [],
    Dessert: [],
  });
  const dishTypes = [
    'Entree and Side',
    'Durbar Special',
    'Main Course',
    'Drinks',
    'Dessert',
  ];

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    console.log(showModal);
    setShowModal(showModal ? false : true);
  };

  const menuForm = () => {
    return (
      <div className="menuform-wrapper">
        <div className="form-input-wrapper">
          <div className="button-wrapper">
            <div onClick={toggleModal} className="close-button">
              <CloseIcon />
            </div>
          </div>

          <Input type="text" placeholder="Dish Name" handleChange={null} />
          <Input type="text" placeholder="Description" handleChange={null} />
          <Input type="text" placeholder="Price" handleChange={null} />
          <button style={{ marginTop: 20 }}>Add Item</button>
        </div>
      </div>
    );
  };

  const modal = () => {
    return <div className="modal-wrapper">{menuForm()}</div>;
  };

  return (
    <div className="page-wrapper">
      <AdminpageHeader />
      <hr />
      {showModal ? modal() : null}

      <div className="admin-dashboard-container">
        <AdminLeftPane />
        <div className="content-container">
          <div className="button-wrapper">
            <button onClick={toggleModal}>
              Add New Item <strong>+</strong>
            </button>
          </div>
          <div className="content-wrapper">
            Menu
            <div className="dish-type-wrapper">
              {dishTypes.map((dishType, indx) => {
                return (
                  <div className="dish-type-container" key={indx}>
                    {dishType}
                    <div>
                      {menuItems[dishType].map((item, i) => {
                        return (
                          <div className="item-wrapper" key={i}>
                            {item}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMenu;
