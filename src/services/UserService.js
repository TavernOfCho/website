import decode from 'jwt-decode';
import { domainService } from '../helpers/domain';

export const userService = {
  login,
  logout,
  register,
  loggedIn,
  getToken,
};

let apiDomain = domainService.getApiDomain();

function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { 'Authorization': 'Bearer ' + user.token };
  } else {
    return {};
  }
}

function loggedIn() {
  // Checks if there is a saved token and it's still valid
  const token = getToken() // Getting token from localstorage
  return !!token && !isTokenExpired(token) // handwaiving here
}

function isTokenExpired(token) {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
      return true;
    }
    else
      return false;
  }
  catch (err) {
    return false;
  }
}

function getToken() {
  // Retrieves the user token from localStorage
  return JSON.parse(localStorage.getItem('user')).token;
}

function setUser(user) {
  // Saves user informations to localStorage
  localStorage.setItem('user', JSON.stringify(user))
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${apiDomain}/login_check`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // Adding user name
      user.username = username;
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      setUser(user);

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function register(username, plainPassword, email) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, plainPassword, email })
  };

  return fetch(`${apiDomain}/users`, requestOptions)
    .then(handleResponse)
}

// eslint-disable-next-line
function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${apiDomain}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
