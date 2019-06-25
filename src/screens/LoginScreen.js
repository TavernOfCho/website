import React from "react";
import Login from "../components/Login";
import ContextMessage from "../components/ContextMessage";
import { connect } from 'react-redux';


class LoginScreen extends React.Component {

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
