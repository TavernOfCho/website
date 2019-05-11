import React from "react";
import HeroUnit from "../components/HeroUnit";
import HeroBanner from "../components/HeroBanner";
import AuthService from "../components/AuthService";
import {FormattedMessage} from 'react-intl';

const Auth = new AuthService();

class HomeScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      hasButton: false,
    }
  }

  componentWillMount() {
    if(Auth.loggedIn() !== true){
      this.setState({hasButton: true})
    }
  }

  render() {

    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />} 
        description={<FormattedMessage id='homescreen.welcome' defaultMessage="Let's choose the next achievement you want to do and find new friends" />} 
        hasButton={this.state.hasButton}/>
        <HeroUnit title={<FormattedMessage id='homescreen' defaultMessage='Home' />}/>
      </div>
    );
  }
}

export default HomeScreen;
