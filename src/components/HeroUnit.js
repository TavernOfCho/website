import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {FormattedMessage} from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button/Button";
import { Link } from 'react-router-dom';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(900 + theme.spacing(6))]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing(8)}px 0 ${theme.spacing(6)}px`,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

function HeroUnit(props) {
  const { classes, hasButton } = props;
  console.log(props);

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Grid container justify="center" alignItems="center">
            <Avatar alt="Chroniqueur Cho" src={require("./img/cho.jpg")} className={classes.bigAvatar} />
            <Typography variant="h6" align="center" color="textSecondary" component="p">
              <FormattedMessage id='herounit.description' description='' defaultMessage='Hello' />
            </Typography>
          </Grid>
          { hasButton &&
            <div className={classes.heroButtons}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <Button component={Link} to="/register" variant="contained" color="primary">
                    <FormattedMessage id='drawer.register' defaultMessage="Register" />
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button component={Link} to="/login" variant="contained" color="primary">
                    <FormattedMessage id='drawer.connect' defaultMessage="Login" />
                  </Button>
                </Grid>
              </Grid>
            </div>
          }
        </div>
        {/* End hero unit */}
      </main>
    </React.Fragment>
  );
}

HeroUnit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroUnit);
