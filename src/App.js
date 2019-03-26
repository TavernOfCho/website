import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Achievement from './containers/AchievementContainer';
import BattlePet from './containers/BattlepetContainer';
import Dashboard from './containers/DashboardContainer';
import Help from './containers/HelpContainer';
import Mount from './containers/MountContainer';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

const views=[
  {title: 'Achievement', type: 'link', link: '/achievement', component: '<Achievement/>'},
  {title: 'BattlePet', type: 'link', link: '/battlepet', component: '<BattlePet/>'},
  {title: 'Dashboard', type: 'link', link: '/dashboard', component: '<Dashboard/>'},
  {title: 'Help', type: 'link', link: '/dashboard', component: '<Help/>'},
  {title: 'Mount', type: 'link', link: '/dashboard', component: '<Mount/>'},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            {/*<AppBar/>*/}
            <ResponsiveDrawer/>
            <Switch>
              <Route exact path="/" component={HomeScreen}/>
              <Route exact path="/login" component={LoginScreen}/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
