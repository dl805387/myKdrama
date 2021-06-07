import React, { useState, useEffect } from "react";
import '../styles/watch.css'
import MyDrama from "./MyDrama";
const axios = require('axios').default;

function Watchlater(props) {

    const {userID, fromHome} = props.location;
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
        // Will not make API call if the user refresh the page
        
            getWatchlater();
        
    }, [props.location]);

    return (
        <div>
            {shows !== [] && (
                shows.map(x=>{
                    return (<MyDrama key={x.showID} userID={localStorage.getItem('userID')} x={x} dramaID={x.watchlaterID} fromWatched={false} />);
                })
            )}
        </div>
    );
}

export default Watchlater;