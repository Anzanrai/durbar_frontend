import { API_URL } from './index';

export const signup = (user) => {
  console.log(user);
  return fetch(`${API_URL}/api/auth/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((success) => {
      return success.json();
    })
    .catch((err) => {
      throw err;
    });
};

export const signin = (user) => {
  console.log(user);
  return fetch(`${API_URL}/api/auth/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((success) => {
      return success.json();
    })
    .catch((err) => {
      return err;
    });
};

export const authenticate = (data, next) => {
  if (typeof window != 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

export const isAdmin = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    if (
      JSON.parse(localStorage.getItem('jwt'))['roles'].includes('ROLE_ADMIN')
    ) {
      return true;
    }
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('jwt');
};
