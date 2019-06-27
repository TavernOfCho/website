import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid/Grid";
import {FormattedMessage} from "react-intl";


const styles = {
  card: {
    margin: 'auto',
},
  media: {
    height: 500,
  },
  root: {
    marginTop: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  wrapperAlliance: {
    backgroundImage: 'linear-gradient(to bottom, #02070f, #071628, #012042, #00295d, #0f3177)',
    color: 'white',
  },
  wrapperHorde: {
    backgroundImage: 'linear-gradient(to bottom, #140404, #280e0c, #3b1011, #501214, #651414)',
    color: 'white',
  },
};

function CharacterInfos(props) {
  const { classes, charInfos } = props;

  const thumbnail = charInfos.thumbnail;
  const thumbnailFormatted = thumbnail.replace('avatar', 'main');
  const blizzardImageUri = 'https://render-eu.worldofwarcraft.com/character/';
  const thumbnailUrl = blizzardImageUri + thumbnailFormatted;

  let faction = '';
  switch(charInfos.faction) {
    case 0:
      faction = 'Alliance';
      break;
    case 1:
      faction = 'Horde';
      break;
    default:
      faction = null;
  }

  // Handle background color
  let wrapperBackgroundColor = () => {
    switch(charInfos.faction){
      case 0:
        return classes.wrapperAlliance;
      case 1:
        return classes.wrapperHorde;
      default:
        return null;
    }
  };


  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={3} className={classes.root}>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={`${thumbnailUrl}`}
            title={charInfos.name}
          />
          <div className={wrapperBackgroundColor()}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              {charInfos.realm}
            </Typography>
            <Typography variant="h5" component="h2">
              {charInfos.name}
            </Typography>
            <Typography className={classes.pos}>
              <FormattedMessage id='charinfo.level' defaultMessage='Level'/>: {charInfos.level}
            </Typography>
            <Typography component="p">
              Faction: {faction}
            </Typography>
            <Typography component="p">
              <FormattedMessage id='charinfo.achievementPoints' defaultMessage='Achievement Points'/>: {charInfos.achievementPoints}
            </Typography>
            <Typography component="p">
              <FormattedMessage id='charinfo.totalKill' defaultMessage='Total honorable kills'/>: {charInfos.totalHonorableKills}
            </Typography>
          </CardContent>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

CharacterInfos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterInfos);
