import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Header/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
