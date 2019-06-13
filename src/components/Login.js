import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { userActions } from '../store/actions/user';
import {FormattedMessage} from 'react-intl';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(6))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
});

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;
    const { dispatch } = this.props;

    if (username && password) {
      dispatch(userActions.login(username, password));
    }

  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />

        <Paper className={classes.paper}>
          <Avatar alt="Chroniqueur Cho" src={require("./img/cho.jpg")} className={classes.avatar} />
          <Typography component="h1" variant="h5">
            <FormattedMessage id='connect' defaultMessage="Login" />
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="username">
                <FormattedMessage id='form.log' defaultMessage="Login" />
              </InputLabel>
              <Input id="username" name="username" autoComplete="username" autoFocus onChange={this.handleChange}/>
            </FormControl>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="password">
                <FormattedMessage id='form.password' defaultMessage="Password" />
              </InputLabel>
              <Input name="password" type="password" id="password" autoComplete="password" onChange={this.handleChange}/>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <FormattedMessage id='form.connect' defaultMessage="Register" />
            </Button>
          </form>
        </Paper>
      </main>
    );

  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(),
  withStyles(styles)
)(Login);
