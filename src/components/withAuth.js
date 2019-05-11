import React, { Component } from 'react';
import AuthService from './AuthService';
import {Redirect} from "react-router-dom";

export default function withAuth(AuthComponent) {
  const Auth = new AuthService('https://127.0.0.1:8052');

  return class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {
        user: null,
        redirect: false,
      }
    }

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/login' />
      }
    }


    componentWillMount() {
      if (!Auth.loggedIn()) {
        if(window.location.pathname !== "/login") {
          this.setRedirect()
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
          Auth.logout()
          if(window.location.pathname !== "/login") {
            this.setRedirect()
          }
        }
      }
    }

    render() {
      return (
        <React.Fragment>
          {this.renderRedirect()}
          <AuthComponent {...this.props} user={this.state.user}/>
        </React.Fragment>
      )
    }

  }

}
