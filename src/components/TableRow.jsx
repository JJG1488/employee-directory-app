import React from "react";

const styles = {
    backgroundColor: "#40739e"
}

function TableRow(props) {
    return (

        <tr style={styles} >
            {
                Object.keys(props.values).map(field => {

                return (
                    <td key={Math.random() * 1}>{props.values[field]}</td>

                )
            })
            }
            
        </tr>
    )
}

export default TableRow;