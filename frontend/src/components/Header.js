import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; 
const axios = require('axios').default; // if you need axios
// import css if you need to

function Header(props) {

    const history = useHistory();

    useEffect(() => {
        history.push("/home");
    }, []);

    return (
        <div>
            {/* A JSX comment */}
            <p> this is navbar </p>
        </div>
    );
}

export default Header;