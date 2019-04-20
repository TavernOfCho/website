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
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const drawerWidth = 240;

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
    padding: theme.spacing.unit * 3,
  },
});

class Drawer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false,
      disconnect: false,
    }

  }


  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  getUserInfos(){
    if(localStorage.getObj("userInfos") != null) {
      return localStorage.getObj("userInfos");
    }
    else {
      return "";
    }
  }

  getUsername() {
    if(this.getUserInfos() !== "") {
      return this.capitalizeFirstLetter(this.getUserInfos().username);
    }
  }

  displayWelcomeMessage() {
    if (this.getUsername() !== undefined && this.getUsername() !== null) {
      return "Bienvenue " + this.getUsername();
    }
  }

  displayDisconnectButton() {
    if(this.getUsername() !== undefined && this.getUsername() !== null) {
      return (
      <Grid item>
        <IconButton
          color="inherit"
          aria-label="Disconnect"
          onClick={this.disconnect}
        >
          <EjectIcon />
        </IconButton>
      </Grid>
      )
    }
  }

  disconnect() {
    if(localStorage.getObj("userInfos") !== undefined && localStorage.getObj("userInfos") !== null) {
      localStorage.removeItem("userInfos");
      window.location.href = "/";
    }
  }

  capitalizeFirstLetter(string) {
    return string ? (string.charAt(0).toUpperCase() + string.slice(1)) : "";
  }



  render() {
    const { classes, theme } = this.props;

    console.log("userInfos:",localStorage.getObj("userInfos"));

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: 'none'}}>
            <ListItem button key={"Home"} >
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none'}}>
            <ListItem button key={"Login"}>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItem>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none'}}>
            <ListItem button key={"Register"}>
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText primary={"Register"} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/character" style={{ textDecoration: 'none'}}>
            <ListItem button key={"Character"}>
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText primary={"Character"} />
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

              <Grid item>
                <Typography variant="h6" color="inherit" noWrap>
                  {this.displayWelcomeMessage()}
                </Typography>
              </Grid>
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

        {/*Content for the page*/}

      </div>
    );
  }
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Drawer);
