import { userService } from './UserService';

export const chatService = {
  insertMessage,
  getMessages,
};

const domain = 'https://127.0.0.1:8052';

function insertMessage(message) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/ld+json',
      'Content-Type': 'application/ld+json',
      'Authorization': `Bearer ${userService.getToken()}`,
    },
    body: JSON.stringify( message )
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
