import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import ContentContainer from "./containers/ContentContainer";
import MenuL from "./components/MenuL";
import Achievement from './view/achievement';
import BattlePet from './view/battlepet';
import Dashboard from './view/dashboard';
import Help from './view/help';
import Mount from './view/mount';

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
            <Header/>
            <Switch>
              <Route path="/" component={ContentContainer}/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
