import {Route, Switch} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CharacterScreen from "../screens/CharacterScreen";
import React from "react";
import RegisterScreen from "../screens/RegisterScreen";
import withAuth from "../components/withAuth";


class Routing extends React.Component {

  render() {

    return (
      <Switch>
        <Route exact path="/" component={() => <HomeScreen user={this.props.user}/>} />
        <Route exact path="/login" component={LoginScreen}/>
        <Route exact path="/register" component={RegisterScreen}/>
        <Route exact path="/character" component={CharacterScreen}/>
      </Switch>
    )
  }
}


export default withAuth(Routing);
