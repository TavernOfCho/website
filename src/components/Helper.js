import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';

function ResponsiveDialog(props) {
  const { fullScreen } = props;
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <FormattedMessage id='helper.help' defaultMessage='I need help!' />
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{<FormattedMessage id='helper.title' defaultMessage='Keep calm and listen' />}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormattedMessage id='helper.description' defaultMessage='Green is your server, Blue is your name' />
          </DialogContentText>
          <Grid item xs={6}>
           <img src={require("./img/login2wow.png")} style={{width: '500px'}} alt={"login wow"} />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            <FormattedMessage id='helper.thx' defaultMessage='Thanks!' />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);