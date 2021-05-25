import React, { useState, useEffect } from "react";
import '../styles/TvShow.css'
const axios = require('axios').default;

function TvShow(props) {

    const {result} = props;

    useEffect(() => {
        //console.log(j);
    }, []);

    return (
        <div className="tvShow">
            {/* A JSX comment 
            <p> {result.name} </p>
            <p>{result.first_air_date}</p>
            <p>{result.vote_average}</p>
            <img src={"https://image.tmdb.org/t/p/w200" + result.poster_path} alt={result.name}></img>
            */}
            <img className="showPic" src={"https://image.tmdb.org/t/p/w300" + result.poster_path} alt={result.name}></img>
            

            <div className="info">
                <p className="showTitle"> {result.name} </p>
                <p className="description">description</p>
            </div>
        </div>
    );
}

export default TvShow;