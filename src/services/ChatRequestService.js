
export const requestChatService = {
  insertMessage,
};

const domain = 'http://127.0.0.1:8053';
const mercureSecret = 'bp4SO0aeP4wodTvFIdgq';
const mercureSecret2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6WyJmb28iLCJiYXIiXSwicHVibGlzaCI6WyJmb28iXX19.LRLvirgONK13JgacQ_VbcjySbVhkSmHy3IznH3tA9PM';

function insertMessage(message) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Authorization': `Bearer ${mercureSecret}`,
      'Authorization': 'Bearer ' + mercureSecret2,
    },
    // body: JSON.stringify({ message })
    body: message
  };

  return fetch(`${domain}/hub`, requestOptions)
    .then(handleResponse)
}

function handleResponse(response) {
  console.log('reponse:',response);
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // location.reload(true);
        return alert(response.status)
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
