import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';

import Config from '../../config';

import headerImg from '../../assets/img/header-img.png'

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}));

const CustomToolbar = props => {
    const classes = useStyles();

    return (
        <Toolbar className="toolbar" style={{ backgroundColor: "#fff", color: "#000", padding: "0", maxHeight: "66px", height: "66px" }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={props.handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <header className="header">
                <Typography className="title">{Config.title}</Typography>
                <img src={headerImg} alt="Profile" />
            </header>
        </Toolbar>
    )
};

export default CustomToolbar;