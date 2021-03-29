import React from 'react';

import { InputAdornment, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import * as TableData from '../../data/TableData';

import arrowDown from '../../assets/img/ico/arrow-down.png';
import prev from '../../assets/img/ico/prev.png';
import next from '../../assets/img/ico/next.png';

const useStyles = makeStyles((theme) => ({
    icon: {
        display: "none",
    }
}));

const TableControls = (props) => {
    const classes = useStyles();

    return (
        <div className="table-controls">
            <span>{1 + props.skip}-{10 + props.skip > props.count ? props.count : 10 - props.skip} of {props.count}</span>
            <div className="pag-btns">
                <button className="pag-btn btn-prev" disabled={props.currentPage === 1} onClick={() => { props.setCurrentPage(props.currentPage - 1); props.setSkip(props.skip - 10) }}><img src={prev} alt="prev" /></button>
                <button className="pag-btn btn-next" disabled={props.currentPage === props.maxPageNumber} onClick={() => { props.setCurrentPage(props.currentPage + 1); props.setSkip(props.skip + 10); }}><img src={next} alt="next" /></button>
            </div>
            <Select
                className="timezone"
                displayEmpty
                defaultValue={"Eg"}
                startAdornment="Timezone:"
                endAdornment={<InputAdornment position="end"><img src={arrowDown} alt="drop" /></InputAdornment>}
                inputProps={{
                    classes: {
                        icon: classes.icon,
                    },
                }}
            >
                {TableData.timezone.map(value => <MenuItem value={value.name}><img src={value.image} alt="flag" /></MenuItem>)}
            </Select>
            <Select
                className="sort"
                displayEmpty
                defaultValue={"Date"}
                startAdornment="Sort:"
                endAdornment={<InputAdornment position="end"><img src={arrowDown} alt="drop" /></InputAdornment>}
                inputProps={{
                    classes: {
                        icon: classes.icon,
                    },
                }}
            >
                <MenuItem value="Date">Date</MenuItem>
                <MenuItem value="Status">Status</MenuItem>
            </Select>
        </div >
    )
}

export default TableControls;