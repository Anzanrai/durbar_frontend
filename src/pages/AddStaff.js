import React, { useState } from 'react';
import './AddMenu.css';
import './AddStaff.css';
import './AdminDashboard.css';
import AdminpageHeader from '../components/AdminpageHeader';
import AdminLeftPane from '../components/AdminLeftPane';
import CloseIcon from '@mui/icons-material/Close';
import Input from '../ui-components/input/Input';
import Toast from '../ui-components/Toast';
import { useCreateStaffMutation, useGetAllStaffQuery } from '../services/user';

function AddStaff() {
  const [showModal, setShowModal] = useState(false);
  const [newStaff, setNewStaff] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    roles: ['staff'],
  });

  const [disabled, setDisabled] = useState(false);
  const [toastType, setToastType] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [displayToast, setDisplayToast] = useState(false);

  const initializeStaff = () => {
    setNewStaff({
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      roles: ['staff'],
    });
  };

  const modal = () => {
    return <div className="modal-wrapper">{staffForm()}</div>;
  };

  const submitForm = (e) => {
    e.preventDefault();
    setDisabled(true);
    createStaff(newStaff)
      .unwrap()
      .then((success) => {
        console.log('Success Section');
        setDisabled(false);
        initializeStaff();
        setShowModal(false);
        setToastMessage(success.message);
        setToastType('success');
        setDisplayToast(true);
      })
      .catch((error) => {
        console.log('Error section');
        setToastMessage(error.data.message);
        setDisabled(false);
        setToastType('error');
        setDisplayToast(true);
        // setShowModal(false);
      });
  };

  const handleChange = (e) => {
    setNewStaff({ ...newStaff, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const staffForm = () => {
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
              placeholder="First Name"
              name="first_name"
              value={newStaff.first_name}
              handleChange={handleChange}
              disabled={disabled}
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={newStaff.last_name}
              handleChange={handleChange}
              disabled={disabled}
            />
            <Input
              type="text"
              placeholder="Username"
              name="username"
              value={newStaff.username}
              handleChange={handleChange}
              disabled={disabled}
            />
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={newStaff.email}
              handleChange={handleChange}
              disabled={disabled}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={newStaff.password}
              handleChange={handleChange}
              disabled={disabled}
            />
            <button style={{ marginTop: 20 }}>Add Staff</button>
          </div>
        </div>
      </form>
    );
  };

  const toggleModal = () => {
    setShowModal(showModal ? false : true);
  };

  const [createStaff, result] = useCreateStaffMutation();
  const { data, error, isLoading } = useGetAllStaffQuery();

  return (
    <div className="page-wrapper">
      <AdminpageHeader />
      <Toast
        displayToast={displayToast}
        type={toastType}
        message={toastMessage}
        setDisplayToast={setDisplayToast}
      />
      <hr />
      {showModal ? modal() : null}
      <div className="admin-dashboard-container">
        <AdminLeftPane />
        <div className="content-container">
          <div className="button-wrapper">
            <button onClick={toggleModal}>
              Add New Staff Member <strong>+</strong>
            </button>
          </div>
          <div className="content-wrapper">Staff Members</div>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            data.data.map((staff) => {
              return <div>{staff.username}</div>;
            })
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AddStaff;
