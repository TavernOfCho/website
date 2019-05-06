import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Drawer from './components/Drawer';
import { connect } from 'react-redux';


class App extends React.Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    // history.listen((location, action) => {
    //   // clear alert on location change
    //   dispatch(alertActions.clear());
    // });
  }


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
