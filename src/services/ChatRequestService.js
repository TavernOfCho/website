import { userService } from './UserService';

export const requestChatService = {
  insertMessage,
};

const domain = 'https://127.0.0.1:8052';
// Ask francois sur historique commit with secretJWT
const mercureSecretDev = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6WyJmb28iLCJiYXIiLCJtZXNzYWdlcyJdLCJwdWJsaXNoIjpbImZvbyIsIm1lc3NhZ2VzIl19fQ.EJDa72nHMVzX0Ay8B6HQNN_kQrMc8GneJ05TYgcAA7s';

function insertMessage(message) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/ld+json',
      'Content-Type': 'application/ld+json',
      'Authorization': 'Bearer ' + userService.getToken(),
    },
    body: JSON.stringify( message )
  };

  return fetch(`${domain}/messages`, requestOptions);
}
