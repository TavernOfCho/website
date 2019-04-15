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
      serverInfos: [],
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NTUzMDk3NjQsImV4cCI6MTU1NTM0NTc2NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9obiJ9.HYOfsJrgmJdAabmtKvGVjx_cXSdCDIRPV8Nt-KwqRciz36MZrlb94tWg2bUFtNVJtt_1PKFIm9bu3AscKKPD9w",
      name: '',
    };

    this.handleCharacterRequest = this.handleCharacterRequest.bind(this);
  }

  getServerNames() {
    return this.state.servers.map(server => server.name).sort();
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
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
    return name.toLowerCase().replace(/\s|-|'/g, '');
  }

  handleCharacterRequest() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer "+ this.state.token);
    fetch('https://127.0.0.1:8052/realms/' + this.serverNameTrim(this.state.server),
      {
        method: 'GET',
        mode: "cors",
        headers: myHeaders
      })
      .then(response => response.json())
      .then(data => {
          this.setState({serverInfos: data, infoDisplay: 1});
          console.log("serverInfos:", this.state.serverInfos);
        }
      )


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
        <p>ID: {this.state.serverInfos.id}</p>
        <p>Nom: {this.state.serverInfos.name}</p>
        <p>Catégorie: {this.state.serverInfos.category}</p>
        <p>Timezone: {this.state.serverInfos.timezone}</p>
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
