import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; 
import '../styles/watch.css'
const axios = require('axios').default;

function Watchlater(props) {

    const history = useHistory();
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

    const remove = (watchlaterID) => {
        axios.post('https://mykdrama.herokuapp.com/deleteWatchlater', {
            watchlaterID: watchlaterID
        }).then(() => {
            console.log("success");
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
                    return (
                        <div className="watchShow" key={x.showID}>
                            <p>{x.name}</p>
                            <img onClick={() => {history.push({
                                pathname: '/detail/' + x.name.replace(/\s/g, ''),
                                id: x.showID,
                                userID: userID
                            })}} src={"https://image.tmdb.org/t/p/w200" + x.poster} alt={x.name}></img>

                            <button onClick={e => {e.preventDefault(); remove(x.watchlaterID)}}>delete</button>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default Watchlater;