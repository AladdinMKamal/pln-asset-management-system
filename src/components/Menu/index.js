import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import sidebarImg from '../../assets/img/sidebar-img.png';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar
}));

const Menu = props => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar}>
                <img src={sidebarImg} alt="Profile" className="drawer-image" />
            </div>
            <h3 style={{ textAlign: "center" }}>Menu Items</h3>
        </div>
    )
};

export default Menu;