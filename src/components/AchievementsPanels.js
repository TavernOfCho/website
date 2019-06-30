import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Link from "@material-ui/core/Link/Link";

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
  },
}));

export default function AchievementsPanels(props) {
  const classes = useStyles();

  console.log('achiev:',props.achievements);

  const locale = props.locale;

  console.log('loc',locale);

  return (
    <div className={classes.root}>
      {props.achievements.map((item, index) => (
        <ExpansionPanel key={index}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Link href={`https://${locale}.wowhead.com/achievement=${item.id}`} data-wowhead={`achievement=${item.id}`}>
              <Avatar alt={item.title} src={"https://render-us.worldofwarcraft.com/icons/56/" + item.icon + ".jpg"} className={classes.bigAvatar} />
            </Link>
            <Typography className={classes.heading}>{item.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="subtitle2" gutterBottom>
              {item.description}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
