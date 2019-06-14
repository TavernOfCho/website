import React from "react";
import HeroUnit from "../components/HeroUnit";
import HeroBanner from "../components/HeroBanner";
import { FormattedMessage } from 'react-intl';
import ChatForm from "../components/ChatForm";

export default class ChatScreen extends React.Component {
  render() {
    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />} description={<FormattedMessage id='homescreen.welcome' defaultMessage="Let's choose the next achievement you want to do and find new friends" />}/>
        <HeroUnit title={<FormattedMessage id='chat' defaultMessage="Chat" />}/>
        <ChatForm/>
      </div>
    );
  }
}
