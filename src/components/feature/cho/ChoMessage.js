import React from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography/Typography";
import Image from "../../img/cho.webp"

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
})

class ChoMessage extends React.Component {

  render() {

    const { classes, message } = this.props;

    return (
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Chroniqueur Cho" src={Image} className={classes.bigAvatar} />
        <Typography variant="h6" align="center" color="textSecondary" component="p">
          {message}
        </Typography>
      </Grid>
    )

  }

}

ChoMessage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChoMessage);
