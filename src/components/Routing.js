import React from "react";
import {Route, Switch} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AchievementScreen from '../screens/AchievementScreen';
import BattlepetScreen from '../screens/BattlepetScreen';
import CharacterScreen from "../screens/CharacterScreen";
import HelpScreen from '../screens/HelpScreen';
import MountScreen from '../screens/MountScreen';
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";

class Routing extends React.Component {

  render() {

    return (
      <Switch>
        <Route exact path="/" component={() => <HomeScreen/>}/>
        <Route exact path="/help" component={() => <HelpScreen/>}/>
        <Route exact path="/login" component={() => <LoginScreen/>}/>
        <Route exact path="/register" component={() => <RegisterScreen/>}/>
        <PrivateRoute exact path="/achievement" component={() => <AchievementScreen/>}/>
        <PrivateRoute exact path="/battlepet" component={() => <BattlepetScreen/>}/>
        <PrivateRoute exact path="/character" component={() => <CharacterScreen/>}/>
        <PrivateRoute exact path="/mount" component={() => <MountScreen/>}/>
        <PrivateRoute exact path="/chat" component={() => <ChatScreen/>}/>
        <PrivateRoute exact path="/profile" component={() => <ProfileScreen/>}/>
      </Switch>
    )
  }
}

export default Routing;
