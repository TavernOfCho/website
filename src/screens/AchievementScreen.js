import React from "react";
import HeroBanner from "../components/HeroBanner";
import { FormattedMessage } from 'react-intl';
import AchievementForm from "../components/form/AchievementForm";
import Helper from "../components/feature/cho/Helper";
import { connect } from 'react-redux';
import AlertMessage from "../components/AlertMessage";

class AchievementScreen extends React.Component {

  render() {

    const { alert } = this.props;

    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />}
        description={<FormattedMessage id="title.achievement" defaultMessage="Do you want me to sing your legend?" />}/>
        <p><FormattedMessage id='character.helper' defaultMessage="Please fill your server and the name of your character." /></p>
        {/* --- System for alert --- */}
        {alert.message && <AlertMessage message={alert.message} type={alert.type}/>}
        <AchievementForm />
        <Helper />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

export default connect(mapStateToProps)(AchievementScreen);
