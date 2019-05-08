import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import MuiDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import EjectIcon from '@material-ui/icons/Eject';
import PersonIcon from '@material-ui/icons/Person';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Routing from "./Routing";
import Tooltip from '@material-ui/core/Tooltip';
import AuthService from '../components/AuthService';
import withAuth from '../components/withAuth';
import ContextMessage from "./ContextMessage";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { alertActions } from "../store/actions/alert";
import { history } from "../helpers/history";

const Auth = new AuthService();

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
  },
});

class Drawer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false,
    }

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  handleLogout(){
    Auth.logout()
    window.location.href = "/login"
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  getUserInfos(){
    if(Auth.loggedIn() === true) {
      return this.props.user
    }
  }

  getUsername() {
      if(Auth.loggedIn() === true) {
        return this.capitalizeFirstLetter(this.getUserInfos().username);
      }
  }

  capitalizeFirstLetter(string) {
    return string ? (string.charAt(0).toUpperCase() + string.slice(1)) : "";
  }

  displayWelcomeMessage() {
    if (Auth.loggedIn() === true) {
      return (
        <Grid item>
          <Typography variant="subtitle2" color="inherit" noWrap>
            {"Bienvenue " + this.getUsername()}
          </Typography>
        </Grid>
      )
    }
  }

  displayDisconnectButton() {
    if(Auth.loggedIn() === true) {
      return (
        <Tooltip title="Déconnexion" aria-label="Déconnexion">
          <Grid item>
            <IconButton
              color="inherit"
              aria-label="Disconnect"
              onClick={this.handleLogout}
            >
              <EjectIcon />
            </IconButton>
          </Grid>
        </Tooltip>
      )
    }
  }

  render() {
    const { classes, theme, alert } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: 'none'}}>
            <ListItem button key={"Accueil"} >
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={"Accueil"} />
            </ListItem>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none'}}>
            <ListItem button key={"Connexion"}>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary={"Connexion"} />
            </ListItem>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none'}}>
            <ListItem button key={"Inscription"}>
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText primary={"Inscription"} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/character" style={{ textDecoration: 'none'}}>
            <ListItem button key={"Personnage"}>
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText primary={"Personnage"} />
            </ListItem>
          </Link>
          {['Achievements', 'Dashboard', 'BattlePet', 'Help', 'Mount'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Grid
              justify="space-between"
              container
              alignItems="center"
            >

              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>

              {this.displayWelcomeMessage()}

              {this.displayDisconnectButton()}

            </Grid>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <MuiDrawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </MuiDrawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <MuiDrawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </MuiDrawer>
          </Hidden>
        </nav>

        {/* Displaying content for pages */}

        <main className={classes.content}>
          <div className={classes.toolbar} />

          {/* Manage alert message*/}
          {alert.message && <ContextMessage message={alert.message}/>}

          {/* Routing for the whole app */}
          <Routing/>

        </main>

      </div>
    );
  }
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

export default compose(
  withAuth,
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(Drawer);
