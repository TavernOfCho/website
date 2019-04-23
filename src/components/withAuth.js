import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
  const Auth = new AuthService('https://127.0.0.1:8052');

  return class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {
        user: null
      }
    }

    componentWillMount() {
      if (!Auth.loggedIn()) {
        if(window.location.pathname !== "/login") {
          window.location.href = "/login"
        }
      }
      else {
        try {
          const profile = Auth.getProfile()
          this.setState({
            user: profile
          })
        }
        catch (err) {
          Auth.logout();
          window.location.href = "/login";
        }
      }
    }

    render() {
      return (
        <AuthComponent {...this.props} user={this.state.user}/>
      )
    }

  }

}
