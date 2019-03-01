import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    iconButton: {
        marginRight: theme.spacing.unit * 2,
    },
    icon: {
        color: 'white',
    },
})

function Header(props) {
    const { classes } = props;

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Link to="/">
                        <IconButton className={classes.iconButton}>
                            <HomeIcon className={classes.icon} />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" color="inherit" noWrap>
                        WOW Collection
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
