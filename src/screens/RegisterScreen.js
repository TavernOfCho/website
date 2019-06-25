import React from "react";
import Register from "../components/Register";
import { connect } from 'react-redux';
import ContextMessage from "../components/ContextMessage";

class RegisterScreen extends React.Component {

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
