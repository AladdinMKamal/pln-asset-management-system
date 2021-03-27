import React, { Fragment } from "react";

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Menu from '../Menu';

import Config from '../../config';

const useStyles = makeStyles(() => ({
    drawerPaper: {
        width: Config.drawerWidth
    }
}));

const CustomSidebar = props => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Fragment>
            <Hidden smUp implementation="css">
                <Drawer
                    container={props.container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.mobileOpen}
                    onClose={props.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <Menu />
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <Menu />
                </Drawer>
            </Hidden>
        </Fragment>
    )
}
export default CustomSidebar;