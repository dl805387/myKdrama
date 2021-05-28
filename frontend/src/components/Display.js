import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; 
import TvShow from '../components/TvShow';
import '../styles/Display.css'
const axios = require('axios').default;

function Display(props) {
    const history = useHistory();

    const apiKey = "2c3c49c8f9892c1b17ebf32c4b74bed0";
    const [genre, setGenre] = useState(18);
    const [page, setPage] = useState(1);
    const [tvShows, setTvShows] = useState([]);

    //https://api.themoviedb.org/3/discover/tv?api_key=2c3c49c8f9892c1b17ebf32c4b74bed0&language=en-US&sort_by=popularity.desc&page=1&with_genres=18&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate


    const discover = () => {
        axios.get("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&page=" + page + 
        "&with_genres=" + genre + "&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate")
        .then((res) => {
            console.log(res.data);
            setTvShows(res.data.results);
        });
    }

    useEffect(() => {
        //discover();
    }, []);


    return (
        <div className="display">
            <button onClick={() => {history.push("/Name")}}>redirect</button>

            <button onClick={e => {e.preventDefault(); discover();}}>click to display!</button>
            <div className="tvShows">
                {tvShows !== [] && tvShows.map(x => {return <TvShow key={x.id} result={x} />})}
            </div>
        </div>
    );
}

export default Display;