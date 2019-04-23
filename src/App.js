import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Drawer from "./components/Drawer";
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';

const Auth = new AuthService();

class App extends Component {

  handleLogout(){
    Auth.logout()
    window.location.href = "/login"
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            {/*<div className="App-header">*/}
              {/*{console.log("Props.user in App.js:",this.props.user)}*/}
              {/*/!*<h2>Welcome {this.props.user.username}</h2>*!/*/}
            {/*</div>*/}
            {/*<p className="App-intro">*/}
              {/*<button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>*/}
            {/*</p>*/}
            <Drawer user={this.props.user}/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default withAuth(App);
