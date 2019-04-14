import {Route, Switch} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CharacterScreen from "../screens/CharacterScreen";
import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Routing extends React.Component {

  render() {
    return (
      <main className={this.props.classes.content}>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/character" component={CharacterScreen}/>
        </Switch>
        <div className={this.props.classes.toolbar} />
      </main>
    )
  }
}

export default withStyles(styles)(Routing);
