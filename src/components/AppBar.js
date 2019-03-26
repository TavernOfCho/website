import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBarMaterialUI from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function AppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBarMaterialUI position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Link>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            Taverne de Cho
          </Typography>
          <Button color="inherit">Achievement</Button>
          <Button color="inherit">Battlepet</Button>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">Help</Button>
          <Button color="inherit">Mount</Button>
          <Link to="/login" style={{ textDecoration: 'none', color: 'white'}}>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBarMaterialUI>
    </div>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
