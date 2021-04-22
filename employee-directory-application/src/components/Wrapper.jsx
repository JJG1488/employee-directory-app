import '../App.css';
import TableContainer from './TableContainer';
import React from 'react';
import Header from './Header';



const styles = {

    backgroundColor: "#353b48"

}

function Wrapper() {

    return (
        <div style={styles}>
<Header />

<TableContainer />

        </div>
    )
    
}

export default Wrapper;