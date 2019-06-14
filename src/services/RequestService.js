import { userService } from './UserService';
import { domainService } from './DomainService';

export const requestService = {
  getServers,
  getMounts,
  getCharacter,
}

let domain = domainService.getApiDomain();

const getServers = (locale) => {
  return this.fetch(`${domain}/realms?locale=${locale}`, {
    method: 'GET'
  })
}

const getMounts = (name, server) => {
  return this.fetch(`${domain}/characters/${name}/${server}/mounts`, {
    method: 'GET'
  })
}

const getCharacter = (character, server) => {
  return fetch(`${domain}/characters/${character}?realm=${server}`, {
    method: 'GET'
  })
}


const fetch = (url, options) => {
  // performs api calls sending the required authentication headers
  const headers = {
    'Accept': 'application/ld+json',
    'Content-Type': 'application/ld+json'
  };

  // Setting Authorization header
  // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
  if (userService.loggedIn()) {
    headers['Authorization'] = 'Bearer ' + userService.getToken()
  };

  return fetch(url, {
    headers,
    ...options
  })
    .then(_checkStatus)
    .then(response => response.json())
};

const _checkStatus = (response) => {
  console.log('resp status',response.status);

  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
