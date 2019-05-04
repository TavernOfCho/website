import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Drawer from './components/Drawer';
import { Provider } from 'react-redux';
import Store from './store/configureStore';


class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <BrowserRouter>
            <React.Fragment>
              <Drawer/>
            </React.Fragment>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
