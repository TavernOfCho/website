import React from "react";
import HeroBanner from "../components/HeroBanner";
import { FormattedMessage } from 'react-intl';
import Help from "../components/feature/cho/Help";

export default class HelpScreen extends React.Component {

  render() {

    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />}
        description={<FormattedMessage id="title.help" defaultMessage="Lost? Don't worry!" />}/>
        <Help />
      </div>
    );
  }
}
