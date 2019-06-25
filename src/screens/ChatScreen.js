import React from "react";
import HeroUnit from "../components/HeroUnit";
import HeroBanner from "../components/HeroBanner";
import { FormattedMessage } from 'react-intl';
import ChatForm from "../components/form/ChatForm";
import { connect } from 'react-redux';
import ContextMessage from "../components/ContextMessage";

class ChatScreen extends React.Component {

  render() {

    const { alert } = this.props;

    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />} description={<FormattedMessage id='homescreen.welcome' defaultMessage="Let's choose the next achievement you want to do and find new friends" />}/>
        <HeroUnit title={<FormattedMessage id='chat' defaultMessage="Chat" />}/>
        {/* ---- Location for alert ---- */}
        {alert.message && <ContextMessage message={alert.message} type={alert.type}/>}
        <ChatForm/>
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

export default connect(mapStateToProps)(ChatScreen);
