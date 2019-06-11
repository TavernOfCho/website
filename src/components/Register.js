import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userActions } from "../store/actions/user";
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

class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      redirect: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    const { username, password, email } = this.state;
    const { dispatch } = this.props;

    if(username && password && email) {
      dispatch(userActions.register(username, password, email));
    }

  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>

        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <FormattedMessage id='form.register' defaultMessage="Register" />
          </Typography>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">
              <FormattedMessage id='form.mail' defaultMessage="Mail" />
            </InputLabel>
            <Input id="email" name="email" autoComplete="email" onChange={this.handleChange} autoFocus/>
          </FormControl>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="username">
                <FormattedMessage id='form.log' defaultMessage="Login" />
              </InputLabel>
              <Input id="username" name="username" autoComplete="username" onChange={this.handleChange}/>
            </FormControl>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="password">
                <FormattedMessage id='form.password' defaultMessage="Password" />
              </InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleChange}/>
            </FormControl>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="passwordConfirmation">
                <FormattedMessage id='form.password.confirm' defaultMessage="Confirm your password" />
              </InputLabel>
              <Input name="passwordConfirmation" type="password" id="passwordConfirmation" autoComplete="current-password" onChange={this.handleChange}/>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <FormattedMessage id='form.register' defaultMessage="Register" />
            </Button>
          </form>
        </Paper>
      </main>
    );

  }


}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { auth } = state;
  return {
    auth,
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Register);
