import React, { useState, useEffect } from "react";
import TvShow from "./TvShow";
import '../styles/Search.css'
const axios = require('axios').default;

function Search() {

    const apiKey = "2c3c49c8f9892c1b17ebf32c4b74bed0";
    const [allShows, setAllShows] = useState([]);
    const [filteredShows, setFilteredShows] = useState([]);

    const getAllDramas = () => {
        // API request to get the total pages
        axios.get("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&page=" + 1 + 
        "&with_genres=18&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate")
        .then((res) => {
            let array = [];
            // Store each show from every page
            for (let i = 1; i <= res.data.total_pages; i++) {
                axios.get("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&page=" + i + 
                "&with_genres=18&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate")
                .then((res) => {
                    res.data.results.map(x=>{
                        array.push(x);
                    });
                });
            }
            setAllShows(array);
        });
    }

    useEffect(() => {
        getAllDramas();
    }, []);

    // Search show by filterering while ignoring capital letters, spaces, and hyphens
    const search = (input) => {
        setFilteredShows(allShows.filter(x=>{
            return (x.name.toLowerCase().replace(/-|\s/g,"").includes(input.toLowerCase().replace(/-|\s/g,"")) && x.poster_path !== null) ||
            (x.original_name.toLowerCase().replace(/-|\s/g,"").includes(input.toLowerCase().replace(/-|\s/g,"")) && x.poster_path !== null);
        }).slice(0, 40));
    }


    return (
        <div className="searchPage">
            <input className="searchInput" placeholder="start typing" onChange={e => {e.preventDefault(); search(e.target.value);}}></input>

            <div className="tvShows">
                {filteredShows.length !== 0 && filteredShows.map(x => {return <TvShow key={x.id} result={x} />})}
            </div>

            <p className="limitMessage">Try not to click on the search tab too many times because API calls are limited to a certain number per day</p>
        </div>
    );
}

export default Search;