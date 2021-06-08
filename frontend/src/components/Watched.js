import React, { useState, useEffect } from "react";
import '../styles/MyDrama.css'
import "./Icons.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyDrama from "./MyDrama";
const axios = require('axios').default;

function Watched(props) {

    const [watchedDramas, setWatchedDramas] = useState([]); 
    const [laterDramas, setLaterDramas] = useState([]); 

    // get dramas from database
    const getWatched = () => {
        axios.post('https://mykdrama.herokuapp.com/getWatched', {
            userID: localStorage.getItem('userID')
        }).then((res) => {
            setWatchedDramas(res.data);
            console.log(res.data);
        });
    }

    const getWatchlater = () => {
        axios.post('https://mykdrama.herokuapp.com/getWatchlater', {
            userID: localStorage.getItem('userID')
        }).then((res) => {
            setLaterDramas(res.data);
            console.log(res.data);
        });
    }

    useEffect(() => {
        getWatched();
        getWatchlater();
    }, [props.location]);

    
    return (
        <div>
            <div className="arrowTitle">
                <FontAwesomeIcon icon="angle-double-right" size="2x" className="purpleAngleRight"/>
                <p className="watchTitle">Watched</p>
            </div>
            <div className="myDramas">
                {watchedDramas !== [] && watchedDramas.map(x=>{return <MyDrama key={x.showID} data={x} dramaID={x.watchedID} fromWatched={true} />})}
            </div>

            <div className="arrowTitle">
                <FontAwesomeIcon icon="angle-double-right" size="2x" className="purpleAngleRight"/>
                <p className="watchTitle">Watch Later</p>
            </div>
            <div className="myDramas">
                {laterDramas !== [] && laterDramas.map(x=>{return <MyDrama key={x.showID} data={x} dramaID={x.watchedID} fromWatched={false} />})}
            </div>
        </div>
    );
}

export default Watched;