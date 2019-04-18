import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import { Link } from 'react-router-dom';


const styles = theme => ({
  heroUnit: {
    backgroundImage: `url("https://external-preview.redd.it/zUTMRGV4F1eau1ygpc7yTqef448PPEK-rvZNN-ycOgQ.png?auto=webp&s=37040ff365cae83eaf3f3b567c6e38d1b310b62e")`,
  },
  heroCont: {
    maxWidth: 2000,
    margin: '0 auto',
    backgroundColor: `rgba(255, 255, 255, 0.5)`,
  },
  heroContent: {
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
})

class HeroBanner extends React.Component {

  constructor(props) {
    super(props);

    this.state= {
      isButtonDisplayed: true,
    }

  }

  componentDidMount() {
    if(localStorage.getObj("userInfos") !== null && localStorage.getObj("userInfos").username) {
      this.setState({isButtonDisplayed: false})
    }
  }


  render() {

    const { classes, title, description, hasButton } = this.props;

    return (
      <div className={classes.heroUnit}>
        <div className={classes.heroCont}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.opa}>
              {title}
            </Typography>
            <Typography variant="h6" align="center" color="textPrimary" paragraph>
              {description}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  { hasButton && this.state.isButtonDisplayed &&
                  <Button component={Link} to="/login" variant="contained" color="primary">
                    Connexion
                  </Button>
                  }
                </Grid>
              </Grid>
            </div>
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
