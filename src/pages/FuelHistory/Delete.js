import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import close from '../../assets/img/ico/close.png';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "400px",
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #FFF',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 0, 4),
        margin: "30vh auto",
        verticalAlign: "center"
    },
}));

export default function Delete(props) {

    const classes = useStyles();

    return (
        <div className={classes.paper} style={{ position: "relative" }}>
            <Container>
                <img src={close} className="close-icon-delete" onClick={props.onCancel} />
                <Typography variant="h5" className="delete-title">
                    Delete
            </Typography>
            </Container>
            <Divider className="divider" />
            <Container className="delete-body">
                <Typography>
                    Are you sure you want to delete the record?
            </Typography>
                <div className="delete-buttons">
                    <Button className="delete-buttons-cancel" onClick={props.onCancel}>Cancel</Button>
                    <Button className="delete-buttons-delete" variant="contained" onClick={() => props.handleDelete(props.id)}>Delete</Button>
                </div>
            </Container>
        </div >
    );
}
