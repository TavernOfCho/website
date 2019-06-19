import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {FormattedMessage} from "react-intl";


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  center: {
    margin: "auto",
  },
  marginBot: {
    marginBottom: 10,
  },
}));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function MessageHistoryPanel(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className={classes.center}>
            <Typography className={classes.heading}><FormattedMessage id='chat.message.history' defaultMessage='Message history'/></Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.center}>
              {props.messages.map((item, index) => (
                <div key={index} className={classes.marginBot}>
                  {capitalizeFirstLetter(item.sender.username)} :
                  <Typography key={index}>{item.text}</Typography>
                </div>
              ))}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
