import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import { Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';


const styles = theme => ({
  heroUnit: {
    backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9dbc5a81-3642-4819-b76a-ac18f697c622/d8h6t64-4a30f625-6232-43ae-be46-3c39ac309547.png/v1/fill/w_1360,h_588,q_70,strp/world_of_warcraft_banner__of_games__by_theexhaustedgamer_d8h6t64-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjkyIiwicGF0aCI6IlwvZlwvOWRiYzVhODEtMzY0Mi00ODE5LWI3NmEtYWMxOGY2OTdjNjIyXC9kOGg2dDY0LTRhMzBmNjI1LTYyMzItNDNhZS1iZTQ2LTNjMzlhYzMwOTU0Ny5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vDEaSmF4ZLJd1-cBv9WYrB1u2ooHa1R25C1L6UDA_dg")`,
  },
  heroCont: {
    maxWidth: 2000,
    margin: '0 auto',
    backgroundColor: `rgba(255, 255, 255, 0.4)`,
  },
  heroContent: {
    padding: `${theme.spacing(8)}px 8px ${theme.spacing(6)}px`,
  },
  heroButtons: {
    marginTop: theme.spacing(1),
  },
})

class HeroBanner extends React.Component {

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
              <Grid container justify="center">
                <Grid item>
                  { hasButton &&
                  <Button component={Link} to="/login" variant="contained" color="primary">
                    <FormattedMessage id='drawer.connect' defaultMessage="Login" />
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
