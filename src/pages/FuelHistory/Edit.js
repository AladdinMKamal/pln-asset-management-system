import React, { useEffect } from 'react';

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
    Container,
    Divider,
    FormControl,
    InputAdornment,
    MenuItem,
    OutlinedInput,
    Select,
    Typography
} from '@material-ui/core';

import GridItem from '../../components/Base/Grid/GridItem';
import GridContainer from '../../components/Base/Grid/GridContainer';

import arrowDown from '../../assets/img/ico/arrow-down.png';
import date from '../../assets/img/ico/date.png';
import close from '../../assets/img/ico/close.png';

import * as TableData from '../../data/TableData';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "60vw",
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ddd',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 0, 2),
        margin: "10vh auto",
        verticalAlign: "center"
    },
    icon: {
        display: "none",
    }
}));

const schema = yup.object().shape({
    vehicle: yup.string().required(),
    odometer: yup.number().typeError('Amount must be a number').positive().integer().required(),
    date: yup.date().typeError('Date is invalid').required(),
    volume: yup.number().typeError('Amount must be a number').positive().required()
});

export default function Edit(props) {

    const classes = useStyles();

    const { handleSubmit, errors, control, setValue } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        props.handleEdit(props.id, data);
    };

    useEffect(() => {
        setValue("odometer", props?.editData?.cost?.cost);
        setValue("volume", props?.editData?.volume);
        setValue("date", "2000-01-01");
        setValue("fuel", "1");
    }, [setValue, props.editData])

    return (
        <div className={classes.paper} style={{ position: "relative" }}>
            <Container>
                <img src={close} className="close-icon-edit" onClick={props.onCancel} alt="close" />
                <Typography variant="h5" className="edit-title">
                    Edit Fuel Entry
            </Typography>
            </Container>
            <Divider style={{ marginBottom: "5px" }} />
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <FormControl fullWidth variant="outlined" style={{ position: "relative" }}>
                                <label className="label">Vehicle</label>
                                <Controller
                                    as={
                                        <Select
                                            className="inputs"
                                            displayEmpty
                                            error={!!errors.vehicle}
                                            endAdornment={<InputAdornment position="end"><img src={arrowDown} alt="drop" /></InputAdornment>}
                                            inputProps={{
                                                classes: {
                                                    icon: classes.icon,
                                                },
                                            }}
                                        >
                                            <MenuItem value="" disabled><em>Select one</em></MenuItem>
                                            {TableData.ShortCarsList.map((car, index) => {
                                                return (
                                                    <MenuItem key={car.name} value={car.name}>
                                                        <span> {car.name}</span>
                                                    </MenuItem>
                                                )
                                            })}
                                        </Select>
                                    }
                                    control={control}
                                    name="vehicle"
                                />
                                <div className="error">{errors?.vehicle?.message}</div>
                            </FormControl>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                            <FormControl fullWidth variant="outlined">
                                <label className="label">Start Date</label>
                                <Controller
                                    as={
                                        <OutlinedInput
                                            type="date"
                                            className="inputs"
                                            error={!!errors.date}
                                            startAdornment={<InputAdornment position="start" ><img style={{ margin: "0 20px" }} src={date} alt="date" /></InputAdornment>}
                                            classes={{
                                                icon: classes.icon,
                                            }}
                                        />
                                    }
                                    control={control}
                                    name="date"
                                />
                                <div className="error">{errors?.date?.message}</div>

                            </FormControl>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                            <FormControl variant="outlined" fullWidth>
                                <label className="label">Odometer</label>
                                <Controller
                                    as={
                                        <OutlinedInput
                                            type="number"
                                            error={!!errors.odometer}
                                            endAdornment={<InputAdornment position="end">Kms</InputAdornment>}
                                            className="inputs"
                                        />
                                    }
                                    control={control}
                                    name="odometer"
                                />
                                <div className="error">{errors?.odometer?.message}</div>
                            </FormControl>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                            <FormControl variant="outlined" fullWidth>
                                <label className="label">Volume</label>

                                <Controller
                                    as={
                                        <OutlinedInput
                                            type="number"
                                            error={!!errors.volume}
                                            endAdornment={<InputAdornment position="end">Ltrs</InputAdornment>}
                                            className="inputs"
                                        />
                                    }
                                    control={control}
                                    name="volume"
                                />
                                <div className="error">{errors?.volume?.message}</div>

                            </FormControl>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                            <FormControl variant="outlined" fullWidth>
                                <label className="label">Fuel Type (optional)</label>

                                <Controller
                                    as={
                                        <Select
                                            className="inputs"
                                            displayEmpty
                                            defaultValue={1}
                                            endAdornment={<InputAdornment position="end"><img src={arrowDown} alt="drop" /></InputAdornment>}
                                            inputProps={{
                                                classes: {
                                                    icon: classes.icon,
                                                },
                                            }}
                                        >
                                            <MenuItem value="" disabled><em>Select one</em></MenuItem>
                                            <MenuItem value={1}>One</MenuItem>
                                            <MenuItem value={2}>Two</MenuItem>
                                            <MenuItem value={3}>Three</MenuItem>
                                        </Select>
                                    }
                                    control={control}
                                    name="fuel"
                                />
                            </FormControl>
                        </GridItem>
                    </GridContainer>
                </Container>
                <Divider style={{ margin: "90px 0 10px 0" }} />
                <Container>
                    <div className="edit-buttons">
                        <Button className="edit-buttons-cancel" onClick={props.onCancel} variant="contained">Cancel</Button>
                        <Button className="edit-buttons-save" color="primary" variant="contained" type="submit">Save</Button>
                    </div>
                </Container>
            </form>
        </div >
    );
}