import React, { useState } from 'react';

import Modal from '@material-ui/core/Modal';

import Edit from './Edit';
import Delete from './Delete';

import Table from '../../components/Table';
import TableControls from '../../components/Table/TableControls';

import * as TableData from '../../data/TableData';

import car1 from '../../assets/img/cars/car1.png';
import car2 from '../../assets/img/cars/car2.png';
import car3 from '../../assets/img/cars/car3.png';
import car4 from '../../assets/img/cars/car4.png';
import editIcon from '../../assets/img/ico/edit.png';
import deleteIcon from '../../assets/img/ico/delete.png';

function FuelHistory(props) {

    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const [editId, setEditId] = useState();
    const [editData, setEditData] = useState();
    const [deleteId, setDeleteId] = useState();

    const [records, setRecords] = useState(TableData.records);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const [count, setCount] = useState(TableData.records.length);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageNumber, setMaxPageNumber] = useState(Math.ceil(TableData.records.length / 10));

    const carsList = [
        { name: "[001] Toyota Avanza", image: car1, status: 0 },
        { name: "[005] Daihatsu Xenia", image: car2, status: 1 },
        { name: "[001] Toyota Avanza", image: car3, status: 0 },
        { name: "[005] Daihatsu Xenia", image: car4, status: 2 },
        { name: "[001] Toyota Avanza", image: car3, status: 0 },
        { name: "[005] Daihatsu Xenia", image: car3, status: 0 }
    ];

    const statusList = [
        { name: "Active", color: "#21A21E" },
        { name: "In shop", color: "#C1931B" },
        { name: "Out of service", color: "#C11B1B" }
    ];

    const columns = [
        {
            name: 'id',
            header: 'id',
            defaultFlex: 1,
            defaultVisible: false,
            headerProps: { className: 'table-header' }
        },
        {
            name: 'vehicle',
            header: 'Vehicle',
            sortable: true,
            defaultFlex: 3,
            minWidth: 200,
            maxWidth: 350,
            headerProps: { className: 'table-header' },
            render: ({ value }) => {
                return (
                    <div>
                        <img src={carsList[value].image} style={{ borderRadius: "50%" }} alt="Vehicle" />
                        <ul style={{ display: "inline-block", listStyle: "none", margin: "0", padding: "0 0 0 10px" }}>
                            <li style={{ fontSize: "14px", color: "#252631" }}>{carsList[value].name}</li>
                            <li style={{ color: statusList[carsList[value].status].color, fontSize: "12px" }}>{statusList[carsList[value].status].name}</li>
                        </ul>
                    </div>
                )
            }
        },
        {
            name: 'time',
            header: 'Time',
            sortable: true,
            defaultFlex: 1,
            minWidth: 80,
            maxWidth: 210,
            headerProps: { className: 'table-header' }
        },
        {
            name: 'totalkm',
            header: 'Total km',
            sortable: true,
            defaultFlex: 1,
            minWidth: 80,
            maxWidth: 210,
            headerProps: { className: 'table-header' },
            render: ({ value }) => `${value} km`
        },
        {
            name: 'volume',
            header: 'Volume',
            sortable: true,
            defaultFlex: 1,
            minWidth: 80,
            maxWidth: 210,
            headerProps: { className: 'table-header' },
            render: ({ value }) => `${value} L`
        },
        {
            name: 'cost',
            header: 'Cost',
            sortable: true,
            defaultFlex: 1,
            minWidth: 80,
            maxWidth: 210,
            headerProps: { className: 'table-header' },
            render: ({ value }) => {
                return (
                    <div className="vehicle-row" style={{ position: "relative" }}>
                        <ul style={{ display: "inline-block", listStyle: "none", margin: "0", padding: "0 0 0 10px" }}>
                            <li>Rp {value.cost}</li>
                            <li style={{ fontSize: "12px" }}>Rp {value.perLiter}/Ltr</li>
                        </ul>
                    </div>
                )
            }
        },
        {
            name: 'actions',
            header: 'Actions',
            sortable: true,
            defaultFlex: 1,
            minWidth: 80,
            maxWidth: 120,
            headerProps: { className: 'table-header' },
            render: ({ value }) => {
                return (
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <img src={editIcon} style={{ cursor: "pointer" }} onClick={() => { setEditData(records[value]); setEditId(value); handleOpenEdit() }} alt="" />
                        <img src={deleteIcon} style={{ cursor: "pointer" }} onClick={() => { setDeleteId(value); handleOpenDelete() }} alt="" />
                    </div>
                )
            }
        }
    ];

    const handleDelete = (id) => {
        //Delete record
        const newRecords = [...records];
        newRecords.splice(id, 1);
        setRecords(newRecords);
        handleCloseDelete();
    }

    const handleEdit = (id, data) => {
        //Update record
        const newRecords = [...records];
        newRecords[id].volume = data.volume;
        newRecords[id].cost.cost = data.odometer;
        setRecords(newRecords);
        handleCloseEdit();
    }

    const handleOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    const handleOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <TableControls
                skip={skip}
                count={count}
                currentPage={currentPage}
                maxPageNumber={maxPageNumber}
                setSkip={setSkip}
                setCurrentPage={setCurrentPage}
            />
            <Table
                records={records}
                columns={columns}
                skip={skip}
                count={count}
                setSkip={setSkip}
                limit={limit}
                setLimit={setLimit}
            />
            <Modal open={openEdit} onClose={handleCloseEdit}>
                <Edit onCancel={handleCloseEdit} id={editId} editData={editData} handleEdit={handleEdit} />
            </Modal>
            <Modal open={openDelete} onClose={handleCloseDelete} >
                <Delete onCancel={handleCloseDelete} id={deleteId} handleDelete={handleDelete} />
            </Modal>
        </div>
    )
}

export default FuelHistory;