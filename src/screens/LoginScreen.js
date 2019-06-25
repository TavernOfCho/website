import React from "react";
import Login from "../components/Login";
import ContextMessage from "../components/ContextMessage";
import { connect } from 'react-redux';
import {history} from "../helpers/history";
import {alertActions} from "../store/actions/alert";

class LoginScreen extends React.Component {

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
      <div className="LoginScreen">
        {/* ---- Location for alert ---- */}
        {alert.message && <ContextMessage message={alert.message} type={alert.type}/>}
        <Login/>
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

export default connect(mapStateToProps)(LoginScreen);
