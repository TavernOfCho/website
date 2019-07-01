import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing(1),
  },
});

function Loader(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CircularProgress className={classes.progress} />
    </React.Fragment>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);
