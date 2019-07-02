import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
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

const useStyles = makeStyles({
  root: {
    background: props =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #C00101 80%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #1F6BF8 80%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: props =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  },
});

function MyButton(props) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
}

MyButton.propTypes = {
  color: PropTypes.oneOf(['red', 'blue']).isRequired,
};

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
                    <MyButton component={Link} to="/character" variant="contained" color="blue">
                      <FormattedMessage id='herounit.character' defaultMessage="Trust new people" />
                    </MyButton>
                  </Grid>
                  <Grid item xs={6}>
                    <MyButton component={Link} to="/mount" variant="contained" color="blue">
                      <FormattedMessage id='herounit.mount' defaultMessage="Discover new mount" />
                    </MyButton>
                  </Grid>
                  <Grid item xs={6}>
                    <MyButton component={Link} to="/achievement" variant="contained" color="blue">
                      <FormattedMessage id='herounit.achievement' defaultMessage="Find new achievement" />
                    </MyButton>
                  </Grid>
                  <Grid item xs={6}>
                    <MyButton component={Link} to="/battlepet" variant="contained" color="blue">
                      <FormattedMessage id='herounit.battlepet' defaultMessage="Discover new battlepet" />
                    </MyButton>
                  </Grid>
                  <Grid item xs={12}>
                    <MyButton component={Link} to="/help" variant="contained" color="red">
                      <FormattedMessage id='herounit.help' defaultMessage="I'm lost! :(" />
                    </MyButton>
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
