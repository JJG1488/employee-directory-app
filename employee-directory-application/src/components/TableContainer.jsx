import React, { Component } from 'react';
import API from '../utils/API';
import Table from './Table';

const style = {
    backgroundColor: "#353b48"
}


class TableContainer extends Component {

    state = {
        employeeData: [],
        displayRows: [],
        searchString: ""
    };



    initialize() {

        API.getUsers(40)

            .then(res => {
                let data = res.data.results.map((emp, i) => {
                    return {
                        id: i + 1,

                        name: emp.name.last + ", " + emp.name.first,

                        email: emp.email
                    };
                });

                this.setState({
                    employeeData: data,
                    displayRows: data,
                    searchString: ""
                });

            })
            .catch((error) => {
                console.log(error);
            });

    }


    render() {

        return (
            <div style={style}>


                <Table rows={this.state.displayRows} />
            </div>
        )
    }


}


export default TableContainer;



  
