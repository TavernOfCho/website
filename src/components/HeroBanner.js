import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Image from './img/pandaria.webp';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  heroUnit: {
    backgroundImage: `url(${Image})`,
  },
  heroCont: {
    maxWidth: 2000,
    margin: '0 auto',
  },
  heroContent: {
    padding: `${theme.spacing(8)}px 8px ${theme.spacing(6)}px`,
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    background: `linear-gradient(0deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.5) 100%)`
  },
})

class HeroBanner extends React.Component {

  render() {

    const { classes, title, description } = this.props;

    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroCont}>
          <div className={classes.heroContent}>
            <Paper className={classes.paper}>
              <Typography variant="h2" align="center" gutterBottom>
                {title}
              </Typography>
              <Typography variant="h6" align="center" paragraph>
                {description}
              </Typography>
            </Paper>
          </div>
        </div>
      </div>
    )

  }

}

HeroBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroBanner);
