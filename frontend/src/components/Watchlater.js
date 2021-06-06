import React, { useState, useEffect } from "react";
const axios = require('axios').default;

function Watchlater(props) {

    const {userID, fromHome} = props.location;
    const [shows, setShows] = useState([]); 

    const getWatchlater = () => {
        // get workouts from database
        axios.post('https://mykdrama.herokuapp.com/getWatchlater', {
            userID: userID
        }).then((res) => {
            setShows(res.data);
            console.log(res.data);
        });
    }

    useEffect(() => {
        // Will not make API call if the user refresh the page
        if (fromHome) {
            getWatchlater();
        }
    }, [props.location]);

    return (
        <div>
            {shows !== [] && (
                shows.map(x=>{
                    return <p key={x.showID}>{x.name}</p>
                })
            )}
        </div>
    );
}

export default Watchlater;