import React, { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

import CustomSidebar from '../components/Sidebar';
import CustomToolbar from '../components/Toolbar';

import Config from '../config';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: Config.drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${Config.drawerWidth}px)`,
            marginLeft: Config.drawerWidth,
            borderBottom: "1px solid #ddd"
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    content: {
        width: `calc(100% - ${Config.drawerWidth}px)`,
        padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar
}));

const Layout = props => {

    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = props.window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar className={classes.appBar} elevation={0}>
                <CustomToolbar handleDrawerToggle={handleDrawerToggle} />
            </AppBar>
            <nav className={classes.drawer} aria-label="nav links">
                <CustomSidebar
                    container={container}
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                />
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} style={{ textAlign: "center" }} />
                <h1 style={{textAlign:"center"}}>Welcome to PLN Asset Management System</h1>
            </main>
        </div>
    );
}

export default Layout;
