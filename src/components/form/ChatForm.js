import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loader from "../Loader";
import { chatService } from "../../services/ChatService";
import MessageHistoryPanel from "../MessageHistoryPanel";
import Grid from "@material-ui/core/Grid/Grid";
import {domainService} from "../../helpers/domain";
import Paper from '@material-ui/core/Paper';
import {FormattedMessage} from "react-intl";

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
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  rootPaper: {
    padding: theme.spacing(3, 2),
  },
});

class ChatForm extends React.Component {

  _isMounted = false;

  constructor(props){
    super(props);

    this.state = {
      server: '',
      message: '',
      historicalMessages: [],
      isLoader: false,
      locale: 'frFR',
      user: JSON.parse(localStorage.getItem('user')),
    };

    // Bind this
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest = event => {

    event.preventDefault();

    if(this.state.message !== '') {

      const sender = '/users/' + this.state.user.data.id.toString();

      let data = {'text': this.state.message, 'sender': sender};

      chatService.insertMessage(data)
        .then(this.setState({message: ''}))
        .catch(err => {
          console.log(err);
        })
    }

  };

  handleChangeName = message => event => {
    this.setState({ [message]: event.target.value });
  };

  componentDidMount() {

    this._isMounted = true;

      // Getting messages for historical
    chatService.getMessages()
      .then(res => {
        if(this._isMounted)
          this.setState({historicalMessages: res['hydra:member']});
      })
      .catch(err => {
        console.log(err);
      })

    let apiDomain = domainService.getApiDomain();
    let mercureDomain = domainService.getMercureDomain();

    const hubURL = `${mercureDomain}/hub`;
    const topic = `${apiDomain}/messages/{id}`;

    const subscribeURL = new URL(hubURL);
    subscribeURL.searchParams.append('topic', topic);

    const es = new EventSource(subscribeURL.toString());

    let pText = null;
    let pUsername = null;

    es.onmessage = ({data}) => {
      const {text} = JSON.parse(data);
      if(text) {
        const userSender = JSON.parse(data).sender;
        const username = userSender.username;
        const messages = document.getElementById('messages');

        // Clear default value
        if(!pText) {
          messages.innerHTML = '';
        }

        pText = document.createElement('p');
        pText.append(document.createTextNode(`${text}`));

        pUsername = document.createElement('span');
        pUsername.append(document.createTextNode(`${username} :`));

        messages.append(pUsername);
        messages.append(pText);

      }

      es.onerror = () => {
        console.log('Event source onerror');
      }
    }

  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.rootCard}>

        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>

          <Grid item xs={12} sm={12} md={10} lg={10}>

            <MessageHistoryPanel messages={this.state.historicalMessages} user={this.state.user.data}/>

          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={10}>

            <form autoComplete="off" onSubmit={this.handleRequest}>

                <TextField
                    id="standard-message"
                    label="Message"
                    helperText={<FormattedMessage id='chat.textfield.helper' defaultMessage='Send your message here.' />}
                    className={classes.textField}
                    onChange={this.handleChangeName('message')}
                    margin="normal"
                    variant="outlined"
                    value= {this.state.message}
                    autoFocus
                  />

                <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                  <FormattedMessage id='chat.send' defaultMessage='Send' />
                </Button>

            </form>

          </Grid>

          {/* Displaying loader during the request time */}
          { this.state.isLoader && <Loader/> }

          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Paper className={classes.rootPaper}>

              <div id="messages">
                <FormattedMessage id='chat.defaultLiveMessage' defaultMessage='No live messages, send the first message of this session.' />
              </div>

            </Paper>

          </Grid>

        </Grid>

      </div>

    );
  }
}

ChatForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatForm);
