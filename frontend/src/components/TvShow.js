import React, { useState, useEffect } from "react";
import '../styles/TvShow.css'
const axios = require('axios').default;

function TvShow(props) {

    const {result} = props;

    useEffect(() => {
        //console.log(parseFloat((result.vote_average * 10).toFixed(2)));
    }, []);

    const toPercent = () => {
        return parseFloat((result.vote_average * 10).toFixed(2)) + "%";
    }

    return (
        <div className="tvShow">
            {/* A JSX comment 
            <p> {result.name} </p>
            <p>{result.first_air_date}</p>
            <p>{result.vote_average}</p>
            <p className="infoBody">{result.overview}</p>
            <img src={"https://image.tmdb.org/t/p/w200" + result.poster_path} alt={result.name}></img>
            */}
            <img className="showPic" src={"https://image.tmdb.org/t/p/w500" + result.poster_path} alt={result.name}></img>
            

            <div className="info">
                <p className="showTitle">{result.name}</p>
                <p className="infoBody">{result.first_air_date}</p>
                <p className="infoBody">{result.vote_average}</p>
                    
                <div className="starRatings">
                    <div className="starRatingsTop" style={{width: toPercent()}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    <div className="starRatingsBottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                </div>
            </div>

        </div>
    );
}

export default TvShow;