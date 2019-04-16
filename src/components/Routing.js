import {Route, Switch} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CharacterScreen from "../screens/CharacterScreen";
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import RegisterScreen from "../screens/RegisterScreen";

const styles = theme => ({
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
    marginTop: 55,
    // marginLeft: 240,
  },
});

class Routing extends React.Component {

  render() {
    return (
      <main className={this.props.classes.content}>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/register" component={RegisterScreen}/>
          <Route exact path="/character" component={CharacterScreen}/>
        </Switch>
      </main>
    )
  }
}

export default withStyles(styles)(Routing);
