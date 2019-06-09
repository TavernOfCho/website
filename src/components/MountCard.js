import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid/Grid";
import CardMedia from '@material-ui/core/CardMedia';

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
});

export default function MountCard(props) {
  const classes = useStyles();

  const srcImage = "https://render-us.worldofwarcraft.com/icons/56/" + props.icon + ".jpg";

  return (

    <div className={classes.root}>
      <Grid container spacing={0}>
        <Card className={classes.card} key={props.key}>
          <CardMedia
            className={classes.media}
            image={srcImage}
            title={props.icon}
          />
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
