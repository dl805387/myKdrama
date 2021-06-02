import React, { useState, useEffect } from "react";
import TvShow from "./TvShow";
const axios = require('axios').default;

function Search(props) {

    const apiKey = "2c3c49c8f9892c1b17ebf32c4b74bed0";
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        let totalPages;
        axios.get("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&page=" + 1 + 
        "&with_genres=18&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate")
        .then((res) => {
            totalPages = res.data.total_pages;
            let array = [];
            array.push(res.data.results);
            for (let i = 2; i <= totalPages; i++) {
                axios.get("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&page=" + i + 
                "&with_genres=18&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate")
                .then((res) => {
                    array.push(res.data.results);
                });
            }
            console.log(array);
            setTvShows(array);
        });
    }, []);

    const test = () => {
        
        let array = [];
        for (let i = 1; i <= 61; i++) {
            axios.get("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&page=" + i + 
            "&with_genres=18&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate")
            .then((res) => {
                array.push(res.data.results);
            });
        }
        console.log(array);
    }

    return (
        <div>
            <button onClick={e => {e.preventDefault(); console.log(tvShows);}}>click me</button>
        </div>
    );
}

export default Search;