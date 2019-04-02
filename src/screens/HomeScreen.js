import React from "react";
import HeroUnit from "../components/HeroUnit";
import HeroBanner from "../components/HeroBanner";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <HeroBanner title={"Taverne de Cho"} description={"Venez planifier votre aventure pour une immersion encore plus grande."} hasButton/>
        <HeroUnit title={"Accueil"}/>
      </div>
    );
  }
}
