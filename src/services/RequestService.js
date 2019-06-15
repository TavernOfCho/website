import { userService } from './UserService';
import { domainService } from '../helpers/domain';

export const requestService = {
  getServers,
  getMounts,
  getCharacter,
}

let domain = domainService.getApiDomain();

function getServers(locale) {
  return fetching(`${domain}/realms?locale=${locale}`, {
    method: 'GET'
  })
}

function getMounts(name, server) {
  return fetching(`${domain}/characters/${name}/${server}/mounts`, {
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

    return fetch(url, {
      headers,
      ...options
    })
      .then(_checkStatus)
      .then(response => response.json())
}

function _checkStatus(response) {
  console.log('resp status',response.status);

  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
