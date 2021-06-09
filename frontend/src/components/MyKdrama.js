import React, { useState, useEffect } from "react";
import '../styles/MyKdrama.css'
import "./Icons.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DramaCard from "./DramaCard";
const axios = require('axios').default;

function MyKdrama(props) {

    const [watchedDramas, setWatchedDramas] = useState([]); 
    const [laterDramas, setLaterDramas] = useState([]); 

    // get dramas from database
    const getWatched = () => {
        axios.post('https://mykdrama.herokuapp.com/getWatched', {
            userID: localStorage.getItem('userID')
        }).then((res) => {
            setWatchedDramas(res.data);
        });
    }

    const getWatchlater = () => {
        axios.post('https://mykdrama.herokuapp.com/getWatchlater', {
            userID: localStorage.getItem('userID')
        }).then((res) => {
            setLaterDramas(res.data);
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (localStorage.getItem('userID') && localStorage.getItem('userID') !== "0") {
            getWatched();
            getWatchlater();
        }
    }, [props.location]);

    
    return (
        <div className="myKdramaPage">
            <div className="arrowTitle">
                <FontAwesomeIcon icon="angle-double-right" size="2x" className="purpleAngleRight"/>
                <p className="watchTitle">Watched</p>
            </div>
            <div className="horzScroll">
                <div className="myDramas">
                    {watchedDramas.length !== 0 && watchedDramas.map(x=>{return <DramaCard key={x.showID} data={x} dramaID={x.watchedID} fromWatched={true} />})}
                </div>
            </div>

            <div className="arrowTitle">
                <FontAwesomeIcon icon="angle-double-right" size="2x" className="blueAngleRight"/>
                <p className="watchTitle">Watch Later</p>
            </div>
            <div className="horzScroll">
                <div className="myDramas">
                    {laterDramas.length !== 0 && laterDramas.map(x=>{return <DramaCard key={x.showID} data={x} dramaID={x.watchlaterID} fromWatched={false} />})}
                </div>
            </div>

            {watchedDramas.length === 0 && laterDramas.length === 0 && (
                <div className="emptyMessage">
                    <p>So far empty :(</p> 
                    <p>Go look for some K-dramas!</p>
                </div>
            )}
        </div>
    );
}

export default MyKdrama;