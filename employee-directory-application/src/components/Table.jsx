import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const style = {
    backgroundColor: "white",
    minWidth: "100vw",
    color: "white"
}

function Table(props) {
    const fields = Object.keys({...props.rows[0]});

    return (
        <table style={style} >
            <TableHeader fields={fields} />
            <TableBody rows={props.rows} />
        </table>
    )
}

export default Table;