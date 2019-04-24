import React from "react";
import HeroUnit from "../components/HeroUnit";
import HeroBanner from "../components/HeroBanner";
import AuthService from "../components/AuthService";

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
        <HeroBanner title={"Taverne de Cho"} description={"Venez planifier votre aventure pour une immersion encore plus grande."} hasButton={this.state.hasButton}/>
        <HeroUnit title={"Accueil"}/>
      </div>
    );
  }
}

export default HomeScreen;
