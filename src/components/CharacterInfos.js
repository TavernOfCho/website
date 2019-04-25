import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 275,
    margin: 'auto',
    backgroundImage: `url("https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/13/a5/7b/13a57b53-a3ef-a9cc-af69-12581a05c61f/source/256x256bb.jpg")`,
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

  return (
      <Card className={classes.card}>
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
  );
}

CharacterInfos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterInfos);
