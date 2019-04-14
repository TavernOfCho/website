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
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import InboxIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

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
});

class CharacterForm extends React.Component {
  state = {
    server: '',
    labelWidth: 0,
    servers: [],
  };

  getServerNames() {
    return this.state.servers.map(server => server.name);
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/ld+json");
    myHeaders.append("Authorization", "Bearer "+ "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NTUyMzUwNzgsImV4cCI6MTU1NTI3MTA3OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9obiJ9.HD6boI2zBPr9SGHMO1zegSDFAYWM0FUOjIvGgm-PGtCzxza-ak-OgbeLMJWXt3dW1S5xh-N5umFklj2wzjwRXQ");
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
        </form>
      </div>
    );
  }
}

CharacterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterForm);
