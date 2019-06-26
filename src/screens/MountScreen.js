import React from "react";
import HeroBanner from "../components/HeroBanner";
import { FormattedMessage } from 'react-intl';
import MountForm from "../components/form/MountForm";
import Helper from "../components/feature/cho/Helper";
import ContextMessage from "../components/ContextMessage";
import { connect } from 'react-redux';

class MountScreen extends React.Component {

  render() {

    const { alert } = this.props;

    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />}
        description={<FormattedMessage id='title.mount' defaultMessage="If you can ride it, I know the name" />}/>
        <p><FormattedMessage id='character.helper' defaultMessage="Please fill your server and the name of your character." /></p>
        <MountForm/>
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

export default connect(mapStateToProps)(MountScreen);
