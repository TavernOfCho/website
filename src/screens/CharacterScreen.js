import React from "react";
import HeroBanner from "../components/HeroBanner";
import {FormattedMessage} from 'react-intl';
import CharacterForm from "../components/form/CharacterForm";
import Helper from "../components/feature/cho/Helper";
import { connect } from 'react-redux';
import ContextMessage from "../components/ContextMessage";

class CharacterScreen extends React.Component {

  render() {

    const { alert } = this.props;

    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />}
        description={<FormattedMessage id='title.character' defaultMessage="I know everyone, do you want to try?" />}/>
        <p><FormattedMessage id='character.helper' defaultMessage="Please fill your server and the name of your character." /></p>
        {/* ---- Location for alert ---- */}
        {alert.message && <ContextMessage message={alert.message} type={alert.type}/>}
        <CharacterForm/>
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

export default connect(mapStateToProps)(CharacterScreen);
