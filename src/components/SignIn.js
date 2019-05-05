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
import AuthService from './AuthService';
import ContextMessage from './ContextMessage';
import { compose } from 'redux';
import { connect } from 'react-redux';
import alertActions from "../store/actions/alert";


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Signin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      invalidCredentials: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.Auth = new AuthService();
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.dispatch(alertActions.success("Bien joué ma gueule"));

    console.log("login after dispatch:", this.props);

    // Send login request
    // this.Auth.login(this.state.username,this.state.password)
    //   .then(res =>{
    //     window.location.href = "/";
    //   })
    //   .catch(err =>{
    //     if(err === 401) {
    //       this.handle401()
    //     };
    //   })

  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handle401 = () => {
    this.setState({invalidCredentials: true})
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate, props in login:',this.props);
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />

        {this.state.invalidCredentials && <ContextMessage message="Pseudo ou mot de passe invalide, veuillez-ressayer." />}

        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="username">Pseudo</InputLabel>
              <Input id="username" name="username" autoComplete="username" autoFocus onChange={this.handleChange}/>
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="password">Mot de passe</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="password" onChange={this.handleChange}/>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              S'enregistrer
            </Button>
          </form>
        </Paper>
      </main>
    );

  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(),
  withStyles(styles)
)(Signin);
