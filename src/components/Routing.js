import {Route, Switch} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CharacterScreen from "../screens/CharacterScreen";
import React from "react";
import RegisterScreen from "../screens/RegisterScreen";
import { PrivateRoute } from './PrivateRoute';


class Routing extends React.Component {

  render() {

    return (
      <Switch>
        <Route exact path="/" component={() => <HomeScreen/>}/>
        <Route exact path="/login" component={LoginScreen}/>
        <Route exact path="/register" component={RegisterScreen}/>
        <PrivateRoute exact path="/character" component={CharacterScreen}/>
      </Switch>
    )
  }
}



export default Routing;
