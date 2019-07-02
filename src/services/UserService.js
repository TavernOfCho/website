import decode from 'jwt-decode';
import { domainService } from '../helpers/domain';

export const userService = {
  login,
  logout,
  register,
  loggedIn,
  getToken,
  isTokenExpired,
  renewToken,
  getUser,
  putUserCharacter,
  getUserCharacter,
};

let apiDomain = domainService.getApiDomain();

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

function getUser() {
  // Retrieves the user token from localStorage
  return JSON.parse(localStorage.getItem('user'));
}

function setUser(user) {
  // Saves user informations to localStorage
  localStorage.setItem('user', JSON.stringify(user));
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

      // store user details and jwt token in local storage to keep user logged in between page refreshes
      setUser(user);

      return user;
    });
}

function renewToken(userInfos) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(userInfos)
  };

    return fetch(`${apiDomain}/token/refresh`, requestOptions)
      .then(handleResponse)
      .then(user => {
        user.data.id = userInfos.data.id;
        setUser(user);
        return user;
      })
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  // Redirecting to home
  window.location.replace('/');
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

function putUserCharacter(charInfos, id) {

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/ld+json',
      'Authorization': `Bearer ${userService.getToken()}`,
    },
    body: JSON.stringify(charInfos)
  };

  return fetch(`${apiDomain}/users/${id}`, requestOptions)
    .then(handleResponse)

}

function getUserCharacter(id) {

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/ld+json',
      'Authorization': `Bearer ${userService.getToken()}`,
    },
  };

  return fetch(`${apiDomain}/users/${id}`, requestOptions)
    .then(handleResponse)

}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        if(window.location.pathname !== '/login' && window.location.pathname !== '/register') {
          // renew token if 401 response returned from api and if location isn't login or register to avoid enter in a loop of post request
          renewToken(getUser());
        }
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
