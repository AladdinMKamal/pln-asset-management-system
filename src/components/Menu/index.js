import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import routes from '../../routes';

import sidebarImg from '../../assets/img/sidebar-img.png';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar
}));

const Menu = props => {
    const classes = useStyles();

    const [open, setOpen] = useState(true);

    const toggleListHandler = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div className={classes.toolbar} style={{ marginBottom: "-10px" }}>
                <img src={sidebarImg} alt="Profile" className="drawer-image" onClick={()=>props.history.push("/")} />
            </div>
            <List>
                {routes.map((route, index) => {
                    return (
                        <>
                            <ListItem
                                button
                                key={route.index}
                                onClick={route.pages.length > 0 ? toggleListHandler : null}
                                className="menu-list-item"

                            >
                                <ListItemIcon className="list-item-icon"><img src={route.icon} /></ListItemIcon>
                                <ListItemText className="list-item-text"> {route.name}</ListItemText>
                            </ListItem>

                            {
                                route.pages.length > 0
                                    ? <Collapse in={open} timeout="auto" unmountOnExit>
                                        {route.pages.map((page, index) => {
                                            return (
                                                <NavLink
                                                    button
                                                    key={index}
                                                    activeClassName="active"
                                                    className="sidebar-link"
                                                    to={page.path}>
                                                    {page.name}
                                                </NavLink>
                                            )
                                        })}
                                    </Collapse>
                                    : null
                            }
                        </>
                    )
                })}
            </List>
        </div>
    )
};

export default withRouter(Menu);