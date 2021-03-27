import React, { useState } from 'react';

import Modal from '@material-ui/core/Modal';

import Edit from './Edit';
import Delete from './Delete';

function FuelHistory(props) {
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

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

    const handleDelete = (id) => {
        //Delete record
    }

    const handleEdite = (data) => {
        //Update record
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Welcome to Fuel History Page</h2>
            <Modal open={openEdit} onClose={handleCloseEdit}>
                <Edit onCancel={handleCloseEdit} />
            </Modal>
            <Modal open={openDelete} onClose={handleCloseDelete}>
                <Delete onCancel={handleCloseDelete} />
            </Modal>
        </div>
    )
}

export default FuelHistory;