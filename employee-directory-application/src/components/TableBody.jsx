import React from 'react';
import TableRow from './TableRow';

const style = {
    backgroundColor: "blue"
}


function TableBody(props) {
    return (
        <tbody style={style}>
            {props.rows.map((row) => {
                return (
                    <TableRow values={row} key={Math.random() * 1}/>
                )
            })}
        </tbody>
    )
}

export default TableBody;