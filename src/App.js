import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Drawer from "./components/Drawer";


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Drawer/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
