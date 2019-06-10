import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  root: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

export default function MountCard(props) {
  const classes = useStyles();

  const srcImage = "https://render-us.worldofwarcraft.com/icons/56/" + props.icon + ".jpg";

  return (
    <Card className={classes.card} key={props.key}>
      <CardContent>
        <Avatar alt={props.icon} src={srcImage} className={classes.bigAvatar} />
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
