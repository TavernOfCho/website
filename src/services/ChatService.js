import { userService } from './UserService';

export const requestChatService = {
  insertMessage,
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

  return fetch(`${domain}/messages`, requestOptions);
}
