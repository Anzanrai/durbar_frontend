import React, { useState } from 'react';
import './AddMenu.css';
import './AdminDashboard.css';
import AdminpageHeader from '../components/AdminpageHeader';
import AdminLeftPane from '../components/AdminLeftPane';
import CloseIcon from '@mui/icons-material/Close';
import Input from '../ui-components/input/Input';
import DropdownMenu from '../ui-components/DropdownMenu/DropdownMenu';
import FileInput from '../ui-components/FileInput/FileInput';
import { createMenuItem } from '../apis/menu';
import Card from '../ui-components/Card';

function AddMenu() {
  const menuItems = {
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
  };
  const dishTypes = [
    'Entree and Side',
    'Durbar Special',
    'Main Course',
    'Drinks',
    'Dessert',
  ];

  const [newMenu, setNewMenu] = useState({
    name: '',
    description: '',
    price: '',
    dish_type: '',
    category: '',
    photo: '',
    pic_value: '',
    formData: new FormData(),
  });

  const { formData } = newMenu;

  const category = ['veg', 'non-veg'];

  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal ? false : true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNewMenu({ ...newMenu, [e.target.name]: e.target.value });
    formData.append(e.target.name, e.target.value);
  };

  const selectionChange = (e) => {
    e.preventDefault();
    setNewMenu({ ...newMenu, [e.target.name]: e.target.value });
    formData.append(e.target.name, e.target.value);
  };

  const handleFileChange = (e) => {
    e.preventDefault();

    setNewMenu({
      ...newMenu,
      [e.target.name]: e.target.files[0],
      pic_value: e.target.files ? e.target.files[0].name : '',
    });
    formData.append(e.target.name, e.target.files[0]);
  };

  const resetMenuData = () => {
    setNewMenu({
      name: '',
      description: '',
      price: '',
      dish_type: '',
      category: '',
      photo: '',
      pic_value: '',
      formData: new FormData(),
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setDisabled(true);
    console.log(formData.get('description'));
    console.log(newMenu);
    createMenuItem(formData)
      .then((response) => {
        toggleModal();
        console.log(response);
        setDisabled(false);
        resetMenuData();
      })
      .catch((error) => {
        console.error(error);
        // alert(error);
      });
  };

  const menuForm = () => {
    console.log(newMenu);
    return (
      <form onSubmit={submitForm} encType="multipart/form-data">
        <div className="menuform-wrapper">
          <div className="form-input-wrapper">
            <div className="button-wrapper">
              <div onClick={toggleModal} className="close-button">
                <CloseIcon />
              </div>
            </div>

            <Input
              type="text"
              placeholder="Dish Name"
              name="name"
              value={newMenu.name}
              handleChange={handleChange}
              disabled={disabled}
            />
            <Input
              type="text"
              placeholder="Description"
              name="description"
              value={newMenu.description}
              handleChange={handleChange}
              disabled={disabled}
            />
            <Input
              type="text"
              placeholder="Price"
              name="price"
              value={newMenu.price}
              handleChange={handleChange}
              disabled={disabled}
            />
            <DropdownMenu
              defaultValue="Select Dish Type"
              name="dish_type"
              value={newMenu.dish_type}
              options={dishTypes}
              selectionChange={selectionChange}
              disabled={disabled}
            />
            <DropdownMenu
              defaultValue="Select Category"
              name="category"
              value={newMenu.category}
              options={category}
              selectionChange={selectionChange}
              disabled={disabled}
            />
            <FileInput
              name="photo"
              value={newMenu.pic_value}
              handleFileChange={handleFileChange}
              disabled={disabled}
            />
            <button style={{ marginTop: 20 }}>Add Item</button>
          </div>
        </div>
      </form>
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
                return <Card dishType={dishType} key={indx} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMenu;
