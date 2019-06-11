import {Route, Switch} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AchievementScreen from '../screens/AchievementScreen';
import BattlepetScreen from '../screens/BattlepetScreen';
import CharacterScreen from "../screens/CharacterScreen";
import MountScreen from '../screens/MountScreen';
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
        <PrivateRoute exact path="/achievement" component={AchievementScreen}/>
        <PrivateRoute exact path="/battlepet" component={BattlepetScreen}/>
        <PrivateRoute exact path="/character" component={CharacterScreen}/>
        <PrivateRoute exact path="/mount" component={MountScreen}/>
      </Switch>
    )
  }
}



export default Routing;
