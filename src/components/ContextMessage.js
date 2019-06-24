import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import classNames from 'classnames';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  snackbar: {
    margin: theme.spacing(3),
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
});



function ContextMessage(props) {
  const { classes, type } = props;

  // Handle background color
  let backgroundColor = () => {
    switch(type){
      case 'info':
        return classes.info;
      case 'error':
        return classes.error;
      case 'success':
        return classes.success;
      case 'warning':
        return classes.warning;
      default:
        return null;
    }
  };

  // Add multiple classes
  let snackClasses = classNames(
    classes.snackbar,
    backgroundColor(),
  );

  return (
    <div className={classes.root}>
      <SnackbarContent
        className={snackClasses}
        message={props.message}
      />
    </div>
  );
}

ContextMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default withStyles(styles)(ContextMessage);
