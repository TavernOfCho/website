import React from "react";
import Register from "../components/Register";
import {history} from "../helpers/history";
import {alertActions} from "../store/actions/alert";
import { connect } from 'react-redux';
import ContextMessage from "../components/ContextMessage";

class RegisterScreen extends React.Component {

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
      <div className="RegisterScreen">
        {/* ---- Location for alert ---- */}
        {alert.message && <ContextMessage message={alert.message} type={alert.type}/>}
        <Register/>
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

export default connect(mapStateToProps)(RegisterScreen);
