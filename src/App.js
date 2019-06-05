import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import Drawer from './components/Drawer';
import { history } from "./helpers/history";


class App extends React.Component {


  render() {
    
    return (
      <div className="App">
        <Router history={history}>
            <Drawer/>
        </Router>
      </div>
    );
  }
}


export default App;
