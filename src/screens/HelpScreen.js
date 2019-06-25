import React from "react";
import HeroBanner from "../components/HeroBanner";
import { FormattedMessage } from 'react-intl';
import Help from "../components/feature/cho/Help";
import { connect } from 'react-redux';
import ContextMessage from "../components/ContextMessage";
import {history} from "../helpers/history";
import {alertActions} from "../store/actions/alert";

class HelpScreen extends React.Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;

    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {

    const { alert } = this.props;

    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />}
        description={<FormattedMessage id="title.help" defaultMessage="Lost? Don't worry!" />}/>
        {alert.message && <ContextMessage message={alert.message} type={alert.type}/>}
        <Help />
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

export default connect(mapStateToProps)(HelpScreen);

