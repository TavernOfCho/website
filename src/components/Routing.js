import {Route, Switch} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CharacterScreen from "../screens/CharacterScreen";
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import RegisterScreen from "../screens/RegisterScreen";
import withAuth from "../components/withAuth";


const styles = theme => ({
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

class Routing extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/" component={() => <HomeScreen user={this.props.user}/>} />
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/register" component={RegisterScreen}/>
          <Route exact path="/character" component={CharacterScreen}/>
        </Switch>
      </main>
    )
  }
}


export default withAuth(withStyles(styles)(Routing));
