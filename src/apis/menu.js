import { API_URL } from './index';

export const createMenuItem = (menu_item) => {
  console.log(menu_item);
  const jwt = JSON.parse(localStorage.getItem('jwt'));
  return fetch(`${API_URL}/api/menu/${jwt.id}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'multipart/form-data',
      'x-access-token': jwt.accessToken,
    },
    body: menu_item,
  })
    .then((success) => {
      return success.json();
    })
    .catch((err) => {
      return err;
    });
};

export const menuByDishType = (dishType) => {
  const jwt = JSON.parse(localStorage.getItem('jwt'));
  return fetch(`${API_URL}/api/menu/by-dish-type/?dishType=${dishType}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'x-access-token': jwt.accessToken,
    },
  })
    .then((success) => {
      return success.json();
    })
    .catch((err) => {
      return err;
    });
};
