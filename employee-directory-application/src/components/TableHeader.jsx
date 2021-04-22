import React from 'react';

const style = {
backgroundColor: "#353b48",

}



function TableHeader(props) {
    return (
        <thead style={style} >
            <tr>
                {props.fields.map(field => {

                    return (
                        <th key={Math.random() * 1}>{field}</th>
                    )

                })}
            </tr>
        </thead>
    )
}


export default TableHeader