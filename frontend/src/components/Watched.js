import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; 
import '../styles/watch.css'
const axios = require('axios').default;

function Watched(props) {

    const history = useHistory();
    const {userID, fromHome} = props.location;
    const [shows, setShows] = useState([]); 

    const getWatched = () => {
        // get workouts from database
        axios.post('https://mykdrama.herokuapp.com/getWatched', {
            userID: userID
        }).then((res) => {
            setShows(res.data);
            console.log(res.data);
        });
    }

    const remove = (watchedID) => {
        axios.post('https://mykdrama.herokuapp.com/deleteWatched', {
            watchedID: watchedID
        }).then(() => {
            console.log("success");
        });
    }

    useEffect(() => {
        // Will not make API call if the user refresh the page
        if (fromHome) {
            getWatched();
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

                            <button onClick={e => {e.preventDefault(); remove(x.watchedID)}}>delete</button>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default Watched;