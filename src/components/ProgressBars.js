import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from "@material-ui/core/Grid/Grid";


const BorderLinearProgress = withStyles({
  root: {
    height: 25,
    backgroundColor: lighten('#ff6c5c', 0.5),
    borderRadius: 5,
  },
  bar: {
    borderRadius: 10,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function ProgressBars() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Grid container spacing={0}>

        <Grid item xs={12} sm={6}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={75}
          />
        </Grid>
      </Grid>
    </div>

  );
}

export default ProgressBars;
