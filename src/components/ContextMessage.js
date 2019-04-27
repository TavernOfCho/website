import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';


const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
    backgroundColor: '#d32f2f'
  },
});

function ContextMessage(props) {
  const { classes } = props;

  return (
      <SnackbarContent
        className={classes.snackbar}
        message={props.message}
      />
  );
}

ContextMessage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContextMessage);
