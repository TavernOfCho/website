import React from "react";
import HeroUnit from "../components/HeroUnit";
import HeroBanner from "../components/HeroBanner";
import CharacterForm from "../components/CharacterForm";

export default class CharacterScreen extends React.Component {
  render() {
    return (
      <div>
        <HeroBanner title={"Taverne de Cho"} description={"Venez planifier votre aventure pour une immersion encore plus grande."}/>
        <HeroUnit title={"Personnage"}/>
        <p>Veuillez sélectionner votre serveur et le nom de votre personnage.</p>
        <CharacterForm/>
      </div>
    );
  }
}
