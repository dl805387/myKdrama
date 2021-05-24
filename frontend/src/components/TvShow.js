import React, { useState, useEffect } from "react";
const axios = require('axios').default;

function TvShow(props) {

    const {result} = props;

    useEffect(() => {
        //console.log(j);
    }, []);

    return (
        <div className="tvShow">
            {/* A JSX comment */}
            <p> {result.name} </p>
            <p>{result.first_air_date}</p>
            <p>{result.vote_average}</p>
            <img src={"https://image.tmdb.org/t/p/w200" + result.poster_path} alt={result.name}></img>
        </div>
    );
}

export default TvShow;