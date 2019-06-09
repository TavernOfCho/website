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
import Loader from "./Loader";
import RequestService from "../services/RequestService";
import ProgressBars from "./ProgressBars";


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
});



class MountForm extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      server: '',
      labelWidth: 0,
      servers: [],
      name: 'aikisugi',
      resMounts: [],
      mountsCollected: 0,
      mountsNotCollected: 0,
      mountsCollectedPercentage: 0,
      isLoaderDisplayed: false,
      isMountsInfoDisplayed: false,
    };

    // Bind this
    this.handleRequest = this.handleRequest.bind(this);
    this.Request = new RequestService();
  }

  getServerNames() {
    return this.state.servers.map(server => server.name).sort();
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

  handleRequest = event => {

    event.preventDefault();

    this.setState({isLoaderDisplayed: true});

    this.Request.getMounts(this.state.name, this.state.server)
      .then(res => {
        console.log('tgiu',res);
        this.setState({
          resMounts: res,
          isLoaderDisplayed:false,
          mountsCollected: res.numCollected,
          mountsNotCollected: res.numNotCollected,
          mountsCollectedPercentage:  this.getPercentage(res.numCollected, res.numNotCollected),
          isMountsInfoDisplayed: true,
        })
      })
      .catch(err => {
        alert(err)
      })

  };

  getPercentage(collected, notCollected) {
    return Math.round((collected / (collected + notCollected))*100);
  }

  componentDidMount() {

    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });

    this.Request.getServers()
      .then(res => {
        this.setState({servers: res['hydra:member']})
      })
      .catch(err =>{
        alert(err)
      })
  }


  render() {
    const { classes } = this.props;

    let serversNames = this.getServerNames();

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
        <form autoComplete="off" onSubmit={this.handleRequest}>
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

            <TextField
              id="standard-name"
              label="Nom du personnage"
              defaultValue="Aikusigi"
              className={classes.textField}
              onChange={this.handleChangeName('name')}
              margin="normal"
              variant="outlined"
            />
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Afficher
          </Button>
          </FormControl>
        </form>

        {/* Displaying loader during the request time */}
        { this.state.isLoaderDisplayed && <Loader/> }

        {/* Displaying datas */}
        {this.state.isMountsInfoDisplayed && <ProgressBars progression={this.state.mountsCollectedPercentage}/>}

      </div>

    );
  }
}

MountForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MountForm);
