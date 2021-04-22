import React from "react";

const styles = {
    backgroundColor: "#353b48",
    float: "auto",
    textContent: "align-center",
    color: "white",
    display: "flex"

}

function Header() {

    return (
        <h1 style={styles}>
            <span style={{ marginLeft: "30%", marginRight: "30%"}} >Employee Directory</span>
        </h1>
    )
}

export default Header;