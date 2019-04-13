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
    pokemons: [],
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/ld+json");
    myHeaders.append("Authorization", "Bearer "+ "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NTUxNDY2MTcsImV4cCI6MTU1NTE4MjYxNywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9obiJ9.iBTkU21pljxOm_RfkiggzVPNp-fsnwoJXpkBWifHR61VER8FaaTl-3IZHdgs3OmS9L-i4AmJ1CP_j8-ifUL20A");
    fetch('https://127.0.0.1:8052/realms',
      {
        method: 'GET',
        mode: "cors",
        headers: myHeaders
      })
      .then(response => response.json())
      .then(data => this.setState({pokemons: data}));

    console.log("test");

    console.log(this.state.pokemons);
  }

  handleChangeServer = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeName = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    console.log("test2");

    console.log(this.state.pokemons);

    return (
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>



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
    );
  }
}

CharacterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterForm);
