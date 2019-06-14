import React from "react";
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(900 + theme.spacing(6))]: {
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    helpContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing(8)}px 0 ${theme.spacing(6)}px`,
    },
    paper: {
      maxWidth: 450,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

function Help(props) {
    const { classes } = props;
  
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <div className={classes.helpContent}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            <FormattedMessage id='help.q.bug' defaultMessage='Can you help me Cho?' />
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            <FormattedMessage id='help.a.bug' defaultMessage='If you find any issue on our tavern, please give us a message on ' />
                            <Button variant="contained" color="primary" target="_blank" href="https://github.com/TavernOfCho/website/issues/new/choose">
                            <FormattedMessage id='issue' defaultMessage='Issue Website' />
                            </Button>
                        </Typography>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            <FormattedMessage id='help.q.contribute' defaultMessage='Can I help you Cho?' />
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            <FormattedMessage id='help.a.contribute' defaultMessage='Sure! take a look at our project on ' />
                            <Button variant="contained" color="primary" target="_blank" href="https://github.com/TavernOfCho/">
                            <FormattedMessage id='tavernproject' defaultMessage='Project TavernOfCho' />
                            </Button>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            <FormattedMessage id='help.q.cho' defaultMessage='Loremaster Cho?' />
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            <FormattedMessage id='help.a.cho' defaultMessage='In World of Warcraft, Loremaster Cho is the leader of the Lorewalkers, a faction of pandaren dedicated to the exploration of the world and its history.' />
                        </Typography>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            <FormattedMessage id='help.q.who' defaultMessage='Cho, who create this tavern?' />
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            <FormattedMessage id='help.a.who' defaultMessage='DILMI Roman MATHIEU François EVRARD Axel' />
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
  
  Help.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Help);
