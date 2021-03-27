import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    records: [],
    editId: null,
    editValue: {},
    deleteId: null,
};

const editRecord = (state, action) => {
    let updatedRecords = state.records;

    updatedRecords.map(record => {
        if (record.id === action.editId) {
            //update record
        }
        return record;
    })

    // OR update record directly
    // updatedRecords[action.editId]=state.EditValue;

    return updateObject(state, { records: updatedRecords });
};

const deleteRecord = (state, action) => {
    let updatedRecords = state.records;

    updatedRecords.splice(action.deleteId, 0);

    return updateObject(state, { records: updatedRecords });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_RECORD:
            return editRecord(state, action);
        case actionTypes.DELETE_RECORD:
            return deleteRecord(state, action);
        default:
            return state;
    }
};

export default reducer;