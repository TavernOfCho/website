import React from "react";
import HeroUnit from "../components/HeroUnit";
import HeroBanner from "../components/HeroBanner";
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {history} from "../helpers/history";
import {alertActions} from "../store/actions/alert";
import ContextMessage from "../components/ContextMessage";

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasButton: false,
    }

    const { dispatch } = this.props;

    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }


  componentWillMount() {
    if(this.props.auth.loggedIn !== true){
      this.setState({hasButton: true})
    }
  }

  render() {

    return (
      <div>
        <HeroBanner title={<FormattedMessage id='chotavern' defaultMessage="Cho's Tavern" />}
        description={<FormattedMessage id='homescreen.welcome' defaultMessage="Let's choose the next achievement you want to do and find new friends" />}/>
        <HeroUnit title={<FormattedMessage id='homescreen' defaultMessage='Home' />}
        hasButton={this.state.hasButton}/>
        {/* ---- Location for alert ---- */}
        {alert.message && <ContextMessage message={alert.message} type={alert.type}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { auth, alert } = state;
  return {
    auth,
    alert,
  }
}

export default connect(mapStateToProps)(HomeScreen);
