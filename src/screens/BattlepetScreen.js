import React from "react";
import HeroBanner from "../components/HeroBanner";
import { FormattedMessage } from 'react-intl';
import BattlepetForm from "../components/form/BattlepetForm";
import Helper from "../components/feature/cho/Helper";
import { connect } from 'react-redux';
import ContextMessage from "../components/ContextMessage";

class BattlepetScreen extends React.Component {

  render() {

    const { alert } = this.props;

    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />}
        description={<FormattedMessage id="title.battlepet" defaultMessage="I know any species of battlepet, challenge me!" />}/>
        <p><FormattedMessage id='character.helper' defaultMessage="Please fill your server and the name of your character." /></p>
        {/* ---- Location for alert ---- */}
        {alert.message && <ContextMessage message={alert.message} type={alert.type}/>}
        <BattlepetForm/>
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

export default connect(mapStateToProps)(BattlepetScreen);
