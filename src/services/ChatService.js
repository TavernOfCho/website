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

  return fetch(`${domain}/messages`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        console.log('response status',response.status)
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
