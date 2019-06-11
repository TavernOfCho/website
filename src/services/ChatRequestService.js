

export const requestChatService = {
  insertMessage,
};

const domain = 'http://127.0.0.1:8053';
const mercureSecretDev = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6WyJmb28iLCJiYXIiLCJtZXNzYWdlcyJdLCJwdWJsaXNoIjpbImZvbyIsIm1lc3NhZ2VzIl19fQ.EJDa72nHMVzX0Ay8B6HQNN_kQrMc8GneJ05TYgcAA7s';

function insertMessage(message) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${mercureSecretDev}`,
    },
    body: JSON.stringify({ message })
  };

  return fetch(`${domain}/hub`, requestOptions);
}
