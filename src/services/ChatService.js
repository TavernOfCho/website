import { userService } from './UserService';
import { domainService } from '../helpers/domain';

export const chatService = {
  insertMessage,
  getMessages,
};

let domain = domainService.getApiDomain();

function insertMessage(data) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/ld+json',
      'Content-Type': 'application/ld+json',
      'Authorization': `Bearer ${userService.getToken()}`,
    },
    body: JSON.stringify( data )
  };

  return fetch(`${domain}/messages`, requestOptions).then(handleResponse);
}

function getMessages() {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/ld+json',
      'Authorization': `Bearer ${userService.getToken()}`,
    }
  };

  // Setting Authorization header
  // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
  if (userService.loggedIn()) {
    requestOptions.headers['Authorization'] = 'Bearer ' + userService.getToken()
  }
  else {
    userService.renewToken(userService.getUser());
    requestOptions.headers['Authorization'] = 'Bearer ' + userService.getToken()
  }

  return fetch(`${domain}/messages`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // renew token if 401 response returned from api
        userService.renewToken(userService.getUser());
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
