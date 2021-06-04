import React, { useState, useEffect } from "react";
const axios = require('axios').default; // if you need axios
// import css if you need to

function Footer(props) {

    const add = () => {

        axios.post('https://mykdrama.herokuapp.com/add', {
            name: "testing"
        }).then((res) => {
            console.log("success");
        });
    }
    // tthis is what we need for tvshow
    // .poster_path
    // .name
    // .first_air_date
    // .vote_average
 
    return (
        <div>
            {/* A JSX comment */}
            <p> This is the footer </p>
            <button onClick={e => {e.preventDefault(); add();}}>booooop</button>
        </div>
    );
}

export default Footer;