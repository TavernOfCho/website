import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class CharacterForm extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      server: '',
      labelWidth: 0,
      servers: [],
      serverInstance: [],
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NTUyNzI2NTgsImV4cCI6MTU1NTMwODY1OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9obiJ9.ZHerRreIUqsAvZivQRyaeUj38Q7o5_1ATrzAq0G5Y_liraVlqdc-25pECUQHjngVcsKnyK0tB2QUfcZim2YaLw",
      name: '',
      // infoDisplay: 0,
    };

    this.handleCharacterRequest = this.handleCharacterRequest.bind(this);
  }

  getServerNames() {
    return this.state.servers.map(server => server.name);
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/ld+json");
    myHeaders.append("Authorization", "Bearer "+ this.state.token);
    fetch('https://127.0.0.1:8052/realms',
      {
        method: 'GET',
        mode: "cors",
        headers: myHeaders
      })
      .then(response => response.json())
      .then(data => {
        this.setState({servers: data["hydra:member"]});
        }
      )

  }

  handleChangeServer = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeName = name => event => {
    this.setState({ [name]: event.target.value });
  };

  serverNameTrim(name){
    return name.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
  }

  handleCharacterRequest() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/ld+json");
    myHeaders.append("Authorization", "Bearer "+ this.state.token);
    fetch('https://127.0.0.1:8052/realms/' + this.serverNameTrim(this.state.server),
      {
        method: 'GET',
        mode: "cors",
        headers: myHeaders
      })
      .then(response => response.json())
      .then(data => {
          this.setState({serverInstance: data});
          console.log("serverInstance:", this.state.serverInstance);
        }
      )

    this.setState({infoDisplay: 1});

  }

  render() {
    const { classes } = this.props;

    const serversNames = this.getServerNames();

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
        {serversNames.map((name,index) => (
          <MenuItem value={name} key={index}>{name}</MenuItem>
        ))}
      </Select>
    );

    let divDisplay = (
      <div>
        <p>ID: {this.state.serverInstance.id}</p>
        <p>Nom: {this.state.serverInstance.name}</p>
        <p>Catégorie: {this.state.serverInstance.category}</p>
        <p>Timezone: {this.state.serverInstance.timezone}</p>
      </div>
    );

    return (
      <div>
        <form autoComplete="off">
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-server-simple"
            >
              Serveur
            </InputLabel>
            {selectServers}

          </FormControl>
            <TextField
              id="standard-name"
              label="Nom du personnage"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChangeName('name')}
              margin="normal"
            />
          <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleCharacterRequest}>
            Afficher
          </Button>
        </form>
        {this.state.infoDisplay && divDisplay }
      </div>
    );
  }
}

CharacterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterForm);
