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
import {FormattedMessage} from 'react-intl';
import ContextMessage from "./ContextMessage";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { alertActions } from "../store/actions/alert";
import { history } from "../helpers/history";
import { userActions } from "../store/actions/user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

import { updateIntl } from 'react-intl-redux'
import { store } from "../store/configureStore";

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

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    // When disconnect button is clicked
    this.props.dispatch(userActions.logout);
    // Redirecting to home
    window.location.replace('/');
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  getUserInfos(){
    if(this.props.auth.loggedIn === true) {
      return this.props.auth.user
    }
  }

  getUsername() {
      if(this.props.auth.loggedIn === true) {
        return this.capitalizeFirstLetter(this.getUserInfos().username);
      }
  }

  capitalizeFirstLetter(string) {
    return string ? (string.charAt(0).toUpperCase() + string.slice(1)) : "";
  }

  displayWelcomeMessage() {
    if (this.props.auth.loggedIn === true) {
      return (
        <Grid item>
          <Typography variant="subtitle2" color="inherit" noWrap>
            <FormattedMessage id='welcome' defaultMessage='Welcome' /> {" " + this.getUsername()}
          </Typography>
        </Grid>
      )
    }
  }

  displayDisconnectButton() {
    if(this.props.auth.loggedIn === true) {
      return (
      <Tooltip title={<FormattedMessage id='drawer.disconnect' defaultMessage='Disconnect' />} aria-label={<FormattedMessage id='disconnect' defaultMessage='Disconnect' />}>
          <Grid item>
            <IconButton
              color="inherit"
              aria-label={<FormattedMessage id='drawer.disconnect' defaultMessage='Disconnect' />}
              onClick={this.handleLogout}
            >
              <EjectIcon />
            </IconButton>
          </Grid>
        </Tooltip>
      )
    }
  }

  changeLanguage(value) {
    store.dispatch(
      updateIntl({
        locale: value,
        messages: store.getState().locales[value],
      })
    )
  }

  render() {
    const { classes, theme, alert, auth } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: 'none'}}>
            <ListItem button key={<FormattedMessage id='homescreen' defaultMessage="Tavern" />} >
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={<FormattedMessage id='homescreen' defaultMessage="Tavern" />} />
            </ListItem>
          </Link>
          {!auth.loggedIn &&
            <React.Fragment>
              <Link to="/login" style={{ textDecoration: 'none'}}>
                <ListItem button key={<FormattedMessage id='drawer.connect' defaultMessage="Log In" />}>
                  <ListItemIcon><PersonIcon /></ListItemIcon>
                  <ListItemText primary={<FormattedMessage id='drawer.connect' defaultMessage="Log In" />} />
                </ListItem>
              </Link>
              <Link to="/register" style={{ textDecoration: 'none'}}>
                <ListItem button key={<FormattedMessage id='drawer.register' defaultMessage="Register" />}>
                  <ListItemIcon><GroupIcon /></ListItemIcon>
                  <ListItemText primary={<FormattedMessage id='drawer.register' defaultMessage="Register" />} />
                </ListItem>
              </Link>
            </React.Fragment>
          }
        </List>
        <Divider />
        {auth.loggedIn &&
        <List>
          <Link to="/character" style={{textDecoration: 'none'}}>
            <ListItem button key={<FormattedMessage id='drawer.character' defaultMessage="Character"/>}>
              <ListItemIcon><GroupIcon/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id='drawer.character' defaultMessage="Character"/>}/>
            </ListItem>
          </Link>
          <Link to="/mount" style={{textDecoration: 'none'}}>
            <ListItem button key={<FormattedMessage id='drawer.mount' defaultMessage="Mount"/>}>
              <ListItemIcon><FontAwesomeIcon icon={faDragon} style={{marginRight: '3', marginLeft: '1'}}/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id='drawer.mount' defaultMessage="Mount"/>}/>
            </ListItem>
          </Link>
          <Link to="battlepet" style={{textDecoration: 'none'}}>
            <ListItem button key={<FormattedMessage id='drawer.battlepet' defaultMessage="BattlePet"/>}>
              <ListItemIcon><FontAwesomeIcon icon={faPaw} style={{marginRight: '3', marginLeft: '4'}}/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id='drawer.battlepet' defaultMessage="BattlePet"/>}/>
            </ListItem>
          </Link>
          <Link to="/achievement" style={{textDecoration: 'none'}}>
            <ListItem button key={<FormattedMessage id='drawer.achievement' defaultMessage="Achievement"/>}>
              <ListItemIcon><FontAwesomeIcon icon={faCrown} style={{marginRight: '3', marginLeft: '3'}}/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id='drawer.achievement' defaultMessage="Achievement"/>}/>
            </ListItem>
          </Link>
          <Link to="/help" style={{textDecoration: 'none'}}>
            <ListItem button key={<FormattedMessage id='drawer.help' defaultMessage="Help"/>}>
              <ListItemIcon><InboxIcon/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id='drawer.help' defaultMessage="Help"/>}/>
            </ListItem>
          </Link>
        </List>
        }
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

              <div>
                <img
                  className={classes.flag}
                  src={require("./img/flag-en.webp")}
                  alt="flag-en"
                  onClick={() => this.changeLanguage("en")}
                />
                <img
                  className={classes.flag}
                  src={require("./img/flag-fr.webp")}
                  alt="flag-fr"
                  onClick={() => this.changeLanguage("fr")}
                />
              </div>

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
          {alert.message && <ContextMessage message={alert.message} type={alert.type}/>}

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
  const { alert, auth } = state;
  return {
    alert,
    auth
  };
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(Drawer);
