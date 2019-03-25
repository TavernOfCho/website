import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Achievement from './containers/AchievementContainer';
import BattlePet from './containers/BattlepetContainer';
import ContentContainer from "./containers/ContentContainer";
import Dashboard from './containers/DashboardContainer';
import Help from './containers/HelpContainer';
import Mount from './containers/MountContainer';
import ButtonAppBar from "./components/ButtonAppBar";
import LoginContainer from "./containers/LoginContainer";

const views=[
  {tittle: 'Achievement', type: 'link', link: '/achievement', component: '<Achievement/>'},
  {tittle: 'BattlePet', type: 'link', link: '/battlepet', component: '<BattlePet/>'},
  {tittle: 'Dashboard', type: 'link', link: '/dashboard', component: '<Dashboard/>'},
  {tittle: 'Help', type: 'link', link: '/dashboard', component: '<Help/>'},
  {tittle: 'Mount', type: 'link', link: '/dashboard', component: '<Mount/>'},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <ButtonAppBar/>
            <Switch>
              <Route exact path="/" component={ContentContainer}/>
              <Route exact path="/login" component={LoginContainer}/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
