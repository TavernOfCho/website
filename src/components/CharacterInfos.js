import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid/Grid";


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
  wrapper: {
    backgroundColor: `rgba(255, 255, 255, 0.2)`,
  },
};

function CharacterInfos(props) {
  const { classes, charInfos } = props;

  const thumbnail = charInfos.thumbnail;
  const thumbnailFormatted = thumbnail.replace('avatar', 'main');
  const blizzardImageUri = 'https://render-eu.worldofwarcraft.com/character/';
  const thumbnailUrl = blizzardImageUri + thumbnailFormatted;

  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={3} className={classes.root}>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={`${thumbnailUrl}`}
            title={charInfos.name}
          />
          <div className={classes.wrapper}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {charInfos.realm}
            </Typography>
            <Typography variant="h5" component="h2">
              {charInfos.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Level: {charInfos.level}
            </Typography>
            <Typography component="p">
              Battlegroup: {charInfos.battlegroup}
            </Typography>
            <Typography component="p">
              Achievement points: {charInfos.achievementPoints}
            </Typography>
            <Typography component="p">
              Total honorable kills: {charInfos.totalHonorableKills}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Détails</Button>
          </CardActions>
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
