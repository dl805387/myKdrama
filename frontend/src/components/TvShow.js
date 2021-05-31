import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; 
import '../styles/TvShow.css'
const axios = require('axios').default;

function TvShow(props) {

    const history = useHistory();
    const {result} = props;

    const toPercent = () => {
        return parseFloat((result.vote_average * 10).toFixed(2)) + "%";
    }

    return (
        <div className="tvShow" 
            onClick={() => {history.push({
                pathname: '/detail/' + result.name.replace(/\s/g, ''),
                id: result.id
            })}}
        >
            <img className="showPic" src={"https://image.tmdb.org/t/p/w500" + result.poster_path} alt={result.name}></img>
            
            <div className="info">
                <p className="showTitle">{result.name}</p>
                <p className="infoBody">First Air Date: {result.first_air_date}</p>
                <p className="infoBody">User Rating: {result.vote_average} /10</p>
                    
                <div className="starRatings">
                    <div className="starRatingsTop" style={{width: toPercent()}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    <div className="starRatingsBottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                </div>

                <p className="infoFooter">Click for more detail!</p>
            </div>
        </div>
    );
}

export default TvShow;