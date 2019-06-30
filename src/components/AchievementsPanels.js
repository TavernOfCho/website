import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Link from "@material-ui/core/Link/Link";
import Grid from "@material-ui/core/Grid/Grid";

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    [theme.breakpoints.up('xs')]: {
      padding: '15px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '25px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '28px',
    },
  },
}));

export default function AchievementsPanels(props) {
  const classes = useStyles();

  console.log('achiev:',props.achievements);

  // Language for displaying wowhead tooltip
  const locale = props.locale;

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
        {props.achievements.map((item, index) => (
          <Grid item xs={12} sm={12} md={10} lg={8}>
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Link href={`https://${locale}.wowhead.com/achievement=${item.id}`} data-wowhead={`achievement=${item.id}`}>
                <Avatar alt={item.title} src={"https://render-us.worldofwarcraft.com/icons/56/" + item.icon + ".jpg"} className={classes.bigAvatar} />
              </Link>
              <div>
                <Typography className={classes.heading} align="center">{item.title}</Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="subtitle2" gutterBottom>
                {item.description}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
