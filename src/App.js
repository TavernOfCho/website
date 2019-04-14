import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Drawer from "./components/Drawer";
import Routing from "./components/Routing";


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Drawer/>
            <Routing/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
