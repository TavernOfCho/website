import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {FormattedMessage} from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button/Button";
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import ChoMessage from "./feature/cho/ChoMessage";

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
  paper: {
    maxWidth: 450,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function HeroUnit(props) {
  const { classes, hasButton } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <ChoMessage message={<FormattedMessage id='herounit.description' defaultMessage='Welcome to the tavern of Cho !' />} />
          { hasButton &&
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="baseline"
              >
                <Paper className={classes.paper}>
                  <Typography variant="h6" align="center" color="textSecondary" component="p">
                    <FormattedMessage id='herounit.pleaseregister' defaultMessage='Please, register to the application.' />
                  </Typography>
                </Paper>

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
          }
          { !hasButton &&
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="baseline"
              >
                <Paper className={classes.paper}>
                  <Typography variant="h6" align="center" color="textSecondary" component="p">
                    <FormattedMessage id='herounit.explore' defaultMessage="Let's talk! What you want to do today?" />
                  </Typography>
                </Paper>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Button component={Link} to="/character" variant="contained" color="primary">
                      <FormattedMessage id='herounit.character' defaultMessage="Trust new people" />
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button component={Link} to="/mount" variant="contained" color="primary">
                      <FormattedMessage id='herounit.mount' defaultMessage="Discover new mount" />
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button component={Link} to="/achievement" variant="contained" color="primary">
                      <FormattedMessage id='herounit.achievement' defaultMessage="Find new achievement" />
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button component={Link} to="/battlepet" variant="contained" color="primary">
                      <FormattedMessage id='herounit.battlepet' defaultMessage="Discover new battlepet" />
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button component={Link} to="/help" variant="contained" color="primary">
                      <FormattedMessage id='herounit.help' defaultMessage="I'm lost! :(" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
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
