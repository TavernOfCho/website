import { userService } from './UserService';
import { domainService } from '../helpers/domain';

export const requestService = {
  getServers,
  getMounts,
  getCharacter,
};

let domain = domainService.getApiDomain();

function getServers(locale) {
  return fetching(`${domain}/realms?locale=${locale}`, {
    method: 'GET'
  })
}

function getMounts(name, server, language) {

  // Handling language to set it correctly for api call
  switch (language) {
    case 'fr':
      language = 'frFR';
      break;
    case 'en':
      language = 'enGB';
      break;
    default:
      return null;
  }

  return fetching(`${domain}/characters/${name}/${server}/mounts?locale=${language}`, {
    method: 'GET'
  })
}

function getCharacter(character, server) {
  return fetching(`${domain}/characters/${character}?realm=${server}`, {
    method: 'GET'
  })
}


function fetching(url, options) {
  // performs api calls sending the required authentication headers
  const headers = {
    'Accept': 'application/ld+json',
    'Content-Type': 'application/ld+json'
  };

  // Setting Authorization header
  // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
  if (userService.loggedIn()) {
    headers['Authorization'] = 'Bearer ' + userService.getToken()
  }
  else {
    userService.renewToken(userService.getUser());
    headers['Authorization'] = 'Bearer ' + userService.getToken()
  }

    return fetch(url, {
      headers,
      ...options
    }).then(handleResponse)
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
