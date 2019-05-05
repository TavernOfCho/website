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
    const { alert } = this.props;
    console.log("App.js:", this.props);

    return (
      <div className="App">
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}testou</div>
        }
        <BrowserRouter>
          <React.Fragment>
            <Drawer/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

export default connect(mapStateToProps)(App);
