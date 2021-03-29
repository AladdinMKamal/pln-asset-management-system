import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';

function Table(props) {
    const empty = () => null
    return (
        <ReactDataGrid
            idProperty="id"
            columns={props.columns}
            dataSource={props.records}
            style={{ minHeight: 440 }}
            pagination
            limit={props.limit}
            skip={props.skip}
            onLimitChange={props.setLimit}
            onSkipChange={props.setSkip}
            showZebraRows={false}
            showCellBorders={"horizontal"}
            rowHeight={60}
            rowClassName="table-row"
            headerHeight={46}
            resizable={true}
            showColumnMenuTool={false}
            renderPaginationToolbar={empty}
        />
    )
}

export default Table;