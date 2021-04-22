import React from "react";

const style = {
    backgroundColor: "#353b48",
    color: "white",
    marginLeft: "30%",
    marginRight: "30%",
    marginBottom: "5%",
    display: "flex",
}

function SearchForm(props) {
    return (
        <form style={style}>

            <div>

                <label htmlFor="search-field"> Search: </label>
                <input 
                name="searchString"
                id="search-field"
                placeholder="last, first"
                value={props.searchString}
                onChange={props.handleInputChange} />

                <button onClick={props.handleFormSubmit}>
                    Search
                </button>
                <button onClick={props.handleSort}>
                    Sort
                </button>
                <button onClick={props.handleFormReset}>
                    Reset
                </button>

                
            </div>
        </form>
    )
}


export default SearchForm;