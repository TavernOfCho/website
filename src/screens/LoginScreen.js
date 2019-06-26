import React from "react";
import Login from "../components/Login";
import { connect } from 'react-redux';
import AlertMessage from "../components/AlertMessage";


class LoginScreen extends React.Component {

  render() {

    const { alert } = this.props;

    return (
      <div className="LoginScreen">
        {/* --- System for alert --- */}
        {alert.message && <AlertMessage message={alert.message} type={alert.type}/>}
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
