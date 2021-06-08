import React, { useState, useEffect } from "react";
import '../styles/MyDrama.css'
import MyDrama from "./MyDrama";
const axios = require('axios').default;

function Watchlater(props) {

    const [shows, setShows] = useState([]); 

    const getWatchlater = () => {
        // get workouts from database
        axios.post('https://mykdrama.herokuapp.com/getWatchlater', {
            userID: localStorage.getItem('userID')
        }).then((res) => {
            setShows(res.data);
            console.log(res.data);
        });
    }

    useEffect(() => {
        getWatchlater();
    }, [props.location]);

    
    return (
        <div>
            <div className="myDramas">
                {shows !== [] && shows.map(x=>{return <MyDrama key={x.showID} data={x} dramaID={x.watchedID} fromWatched={false} />})}
            </div>
        </div>
    );
}

export default Watchlater;