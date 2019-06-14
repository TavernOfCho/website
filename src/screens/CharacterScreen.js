import React from "react";
import HeroBanner from "../components/HeroBanner";
import {FormattedMessage} from 'react-intl';
import CharacterForm from "../components/form/CharacterForm";
import Helper from "../components/feature/cho/Helper";

export default class CharacterScreen extends React.Component {
  render() {
    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />} 
        description={<FormattedMessage id='title.character' defaultMessage="I know everyone, do you want to try?" />}/>
        <p><FormattedMessage id='character.helper' defaultMessage="Please fill your server and the name of your character." /></p>
        <CharacterForm/>
        <Helper />
      </div>
    );
  }
}
