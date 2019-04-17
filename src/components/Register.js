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

class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      userInfos: [],
      tokenInfos: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    let credentialsRegister = {
      "username": this.state.username,
      "plainPassword": this.state.password,
      "email": this.state.email,
    };

    let credentialsLogin = {
      "username": this.state.username,
      "password": this.state.password,
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch('https://127.0.0.1:8052/users',
      {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(credentialsRegister)
      })
      .then(response => response.json())
      .then(data => {
          this.setState({userInfos: data});

        fetch('https://127.0.0.1:8052/login_check',
          {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(credentialsLogin)
          })
          .then(response => response.json())
          .then(data => {
              this.setState({tokenInfos: data});

              localStorage.setItem("token", this.state.tokenInfos.token);

              window.location.href = "/";
            }
          )
          .catch(error => console.log(error));
        }

      )
      .catch(error => console.log(error));

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
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <Input id="email" name="email" autoComplete="email" onChange={this.handleChange} autoFocus/>
          </FormControl>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="username">Pseudo</InputLabel>
              <Input id="username" name="username" autoComplete="username" onChange={this.handleChange}/>
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="password">Mot de passe</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleChange}/>
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="passwordConfirmation">Confirmation mot de passe</InputLabel>
              <Input name="passwordConfirmation" type="password" id="passwordConfirmation" autoComplete="current-password" onChange={this.handleChange}/>
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
        <p>{this.state.userInfos.username}</p>
        <p>{this.state.userInfos.enabled === true ? "Activé" : "Non activé"}</p>
      </main>
    );

  }


}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
