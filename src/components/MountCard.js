import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { darken } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
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
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  align: {
    display: 'flex',
    justifyContent: 'center',
  },
  // Uncommun quality
  q2: {
    color: '#fff',
    backgroundColor: darken('#1eff00', 0.5),
  },
  // Rare quality
  q3: {
    color: '#fff',
    backgroundColor: darken('#0070dd', 0.5),
  },
  // Epic quality
  q4: {
    color: '#fff',
    backgroundColor: darken('#a335ee', 0.5),
  },
});

export default function MountCard(props) {
  const classes = useStyles();

  // Handle background color
  let backgroundColor = () => {
    switch(props.quality){
      case 2:
        return classes.q2;
      case 3:
        return classes.q3;
      case 4:
        return classes.q4;
      default:
        return null;
    }
  };

  const srcImage = "https://render-us.worldofwarcraft.com/icons/56/" + props.icon + ".jpg";

  return (
    <Card className={backgroundColor()}>
      <CardContent>
        <span className={classes.align}>
          {/*Link for data wowhead*/}
          <Link data-wowhead={`item=${props.itemId}`}>
            <Avatar alt={props.icon} src={srcImage} className={classes.bigAvatar} />
          </Link>
        </span>
        <Typography className={classes.title} gutterBottom>
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
