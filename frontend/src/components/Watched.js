import React, { useState, useEffect } from "react";
import '../styles/watch.css'
import MyDrama from "./MyDrama";
const axios = require('axios').default;

function Watched(props) {

    const [shows, setShows] = useState([]); 

    const getWatched = () => {
        // get workouts from database
        axios.post('https://mykdrama.herokuapp.com/getWatched', {
            userID: localStorage.getItem('userID')
        }).then((res) => {
            setShows(res.data);
            console.log(res.data);
        });
    }

    useEffect(() => {
        getWatched();
    }, [props.location]);

    return (
        <div>
            {shows !== [] && (
                shows.map(x=>{
                    return (<MyDrama key={x.showID} userID={localStorage.getItem('userID')} data={x} dramaID={x.watchedID} fromWatched={true} />);
                })
            )}
        </div>
    );
}

export default Watched;