import React from "react";
import HeroBanner from "../components/HeroBanner";
import { FormattedMessage } from 'react-intl';
import BattlepetForm from "../components/form/BattlepetForm";

export default class MountScreen extends React.Component {
  render() {
    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />} 
        description={<FormattedMessage id="title.battlepet" defaultMessage="I know any species of battlepet, challenge me!" />}/>
        <p><FormattedMessage id='character.helper' defaultMessage="Please fill your server and the name of your character." /></p>
        <BattlepetForm/>
      </div>
    );
  }
}
