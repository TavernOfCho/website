import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loader from "./Loader";
import RequestService from "../services/RequestService";
import { requestChatService } from "../services/ChatRequestService";
import querystring from 'querystring';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
},
  rootCard: {
    flexGrow: 1,
    margin: theme.spacing(5),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textField: {
    margin: theme.spacing(1),
    width: 500,
  },
  button: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
});

class ChatForm extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      server: '',
      name: '',
      isLoaderMount: false,
      locale: 'frFR',
    };

    // Bind this
    this.handleRequest = this.handleRequest.bind(this);
    this.Request = new RequestService();
  }

  handleRequest = event => {

    event.preventDefault();

    this.setState({isLoaderMount: true});

    const data = querystring.stringify({
      'topic': 'http://api/messages/1',
      'data': JSON.stringify({"@context":"\/contexts\/Message","@id":"\/messages\/1","@type":"Message","id":1,"text":"test2codcssss"})
    });

    requestChatService.insertMessage(data)
      .then(res => {
        console.log("mercurocrom:",res);
      })
      .catch(err => {
        alert(err);
      })

  };

  handleChangeName = name => event => {
    this.setState({ [name]: event.target.value });
  };


  componentDidMount() {

  }


  render() {
    const { classes } = this.props;

    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleRequest}>

          <TextField
              id="standard-name"
              label="Message"
              className={classes.textField}
              onChange={this.handleChangeName('name')}
              margin="normal"
              variant="outlined"
            />

          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Send
          </Button>
        </form>

        {/* Displaying loader during the request time */}
        { this.state.isLoaderMount && <Loader/> }

      </div>

    );
  }
}

ChatForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatForm);
