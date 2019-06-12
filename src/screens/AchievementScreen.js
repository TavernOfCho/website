import React from "react";
import HeroBanner from "../components/HeroBanner";
import CharacterForm from "../components/form/CharacterForm";
import { FormattedMessage } from 'react-intl';

export default class MountScreen extends React.Component {
  render() {
    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />} 
        description={<FormattedMessage id="title.achievement" defaultMessage="Do you want me to sing your legend?" />}/>
        <CharacterForm />
      </div>
    );
  }
}
