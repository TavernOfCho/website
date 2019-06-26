import React from "react";
import HeroBanner from "../components/HeroBanner";
import { FormattedMessage } from 'react-intl';
import AchievementForm from "../components/form/AchievementForm";
import Helper from "../components/feature/cho/Helper";

export default class AchievementScreen extends React.Component {

  render() {

    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />}
        description={<FormattedMessage id="title.achievement" defaultMessage="Do you want me to sing your legend?" />}/>
        <p><FormattedMessage id='character.helper' defaultMessage="Please fill your server and the name of your character." /></p>
        <AchievementForm />
        <Helper />
      </div>
    );
  }
}
