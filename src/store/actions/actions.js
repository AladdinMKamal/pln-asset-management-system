import * as actionTypes from './actionTypes';

export const editSuccess = (editId, editValue) => {
    return {
        type: actionTypes.EDIT_RECORD,
        editId: editId,
        editValue: editValue
    };
};

export const deleteSuccess = (deleteId) => {
    return {
        type: actionTypes.DELETE_RECORD,
        deleteId: deleteId
    };
};