import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loader from "../Loader";
import { requestService } from "../../services/RequestService";
import Grid from "@material-ui/core/Grid/Grid";
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PersonIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import alertActions from "../../store/actions/alert";
import {userService} from "../../services/UserService";


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
    height: 70,
    width: 70,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SavedCharForm extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      server: '',
      labelWidth: 0,
      labelWidthLocale: 0,
      servers: [],
      name: '',
      isLoaderServer: false,
      locale: '',
    };

    // Bind this
    this.handleRequest = this.handleRequest.bind(this);
  }

  getServerNames() {
    return this.state.servers.map(server => server.name).sort();
  }

  handleChangeServer = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeLocale = event => {

    // Checking if it isn't the same locality
    if(this.state.locale !== event.target.value) {

      this.setState({isLoaderServer: true})

      // API call for servers with locale param
      this.setState(
        { [event.target.name]: event.target.value },
        () => {
          requestService.getServers(this.state.locale)
            .then(res => {
              this.setState({servers: res['hydra:member'], isLoaderServer: false})
            })
            .catch(err => {
              this.setState({isLoaderServer: false});
              console.log(err);
            })
        }
      );

    }

  };

  handleChangeName = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleRequest = event => {

    event.preventDefault();

    const {dispatch, auth} = this.props;
    const {locale, server, name} = this.state;
    const userId = auth.user.data.id;
    const charInfos = {
      'locale': locale,
      'server': server,
      'character': name,
    };

    if (this.state.server !== '' && this.state.name !== '') {
      this.setState({isLoaderMount: true});

      userService.putUserCharacter(charInfos, userId)
        .then(res => {
        })
        .catch(err => {
          this.setState({isLoaderMount: false});

          if (err >= 300 && err <= 500) {
            dispatch(alertActions.error(<FormattedMessage id='form.request.error' defaultMessage='Error, please check the form data.'/>))
          }
        })

    }
  }

  componentWillMount() {

    const { auth, dispatch } = this.props;
    const userId = auth.user.data.id;

    userService.getUserCharacter(userId)
      .then(res => {
        if(res.locale || res.server || res.character) {
          this.setState({
            locale: res.locale,
            server: res.server,
            name: res.character,
          });
        }

      })
      .catch(err => {
        if (err >= 300 && err <= 500) {
          dispatch(alertActions.error(<FormattedMessage id='form.request.error' defaultMessage='Error, please check the form data.'/>))
        }
      })

  }

  componentDidMount() {

    this._isMounted = true;

    // Setting labels for select inputs
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
      labelWidthLocale: ReactDOM.findDOMNode(this.InputLabelRefLocale).offsetWidth,
    });

    // Call API for getting servers
    requestService.getServers(this.state.locale)
      .then(res => {
        if(this._isMounted)
          this.setState({servers: res['hydra:member']})
      })
      .catch(err =>{
        console.log(err)
      })

  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    const { classes } = this.props;

    let serversNames = this.getServerNames();

    const selectLocale = (
      <Select
        value={this.state.locale}
        onChange={this.handleChangeLocale}
        input={
          <OutlinedInput
            labelWidth={this.state.labelWidthLocale}
            name="locale"
            id="locale-select"
          />
        }
      >
        <MenuItem value='frFR'>FR</MenuItem>
        <MenuItem value='ruRU'>RU</MenuItem>
        <MenuItem value='enGB'>EN</MenuItem>
        <MenuItem value='deDE'>DE</MenuItem>
        <MenuItem value='itIT'>IT</MenuItem>
        <MenuItem value='esES'>ES</MenuItem>
      </Select>
    );

    const selectServers = (
      <Select
        value={this.state.server}
        onChange={this.handleChangeServer}
        input={
          <OutlinedInput
            labelWidth={this.state.labelWidth}
            name="server"
            id="outlined-server-simple"
          />
        }
      >
        <MenuItem value="alllloooo" key="default">alllloooo</MenuItem>
        {serversNames.map((name,index) => (
          <MenuItem value={name} key={index}>{name}</MenuItem>
        ))}
      </Select>
    );

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <PersonIcon className={classes.avatar}/>
          <Typography component="h1" variant="h5">
            <FormattedMessage id='form.save.character' defaultMessage="Your character's information" />
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.handleRequest}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <FormControl required variant="outlined" className={classes.formControl}>
                  <InputLabel
                    ref={ref => {
                      this.InputLabelRefLocale = ref;
                    }}
                    htmlFor="locale-select"
                  >
                    <FormattedMessage id='form.local' defaultMessage='Local' />
                  </InputLabel>
                  {selectLocale}
                </FormControl>
              </Grid>
              <Grid item xs={12}>

                { this.state.isLoaderServer && <Loader/> }
                { !this.state.isLoaderServer &&
                <FormControl required variant="outlined" className={classes.formControl}>
                  <InputLabel
                    ref={ref => {
                      this.InputLabelRef = ref;
                    }}
                    htmlFor="outlined-server-simple"
                  >
                    <FormattedMessage id='form.server' defaultMessage='Server' />
                  </InputLabel>
                  {selectServers}
                </FormControl>
                }

              </Grid>

              <Grid item xs={12}>

                <TextField
                    required
                    id="standard-name"
                    label={<FormattedMessage id='form.name.character' defaultMessage='Character Name' />}
                    className={classes.textField}
                    onChange={this.handleChangeName('name')}
                    margin="normal"
                    variant="outlined"
                    value={this.state.name}
                  />

              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <FormattedMessage id='form.save.save' defaultMessage="Save" />
            </Button>
          </form>
        </div>
      </Container>
    );
  }


}

SavedCharForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { intl, auth } = state;
  return {
    intl,
    auth,
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(SavedCharForm);
