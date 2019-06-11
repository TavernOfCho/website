

export const requestChatService = {
  insertMessage,
};

const domain = 'http://127.0.0.1:8053';

function insertMessage(message) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/ld+json' },
    body: JSON.stringify({ message })
  };

  return fetch(`${domain}/messages`, requestOptions)
    .then(handleResponse)
}

function handleResponse(response) {
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
