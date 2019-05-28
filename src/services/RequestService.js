import AuthService from "./AuthService";

export default class RequestService {
  // Initializing important variables
  constructor(domain) {
    this.domain = domain || 'https://127.0.0.1:8052' // API server domain
    this.fetch = this.fetch.bind(this) // React binding stuff
    this.Auth = new AuthService();
  }

  getServers = () => {
    return this.fetch(`${this.domain}/realms`, {
      method: 'GET'
    }).then(res => {
      return Promise.resolve(res);
    })
  }

  getCharacter(character) {
    return this.fetch(`${this.domain}/characters/` + character + '?realm=dalaran', {
      method: 'GET'
    }).then(res => {
      return Promise.resolve(res);
    })
  }


  fetch(url, options) {
    console.log('url:',url);
    // performs api calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.Auth.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.Auth.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json())
  }

  _checkStatus(response) {
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
}
