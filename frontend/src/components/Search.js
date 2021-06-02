import React, { useState, useEffect } from "react";
import TvShow from "./TvShow";
const axios = require('axios').default;

function Search(props) {

    const apiKey = "2c3c49c8f9892c1b17ebf32c4b74bed0";
    const [allShows, setAllShows] = useState([]);
    const [text, setText] = useState("");
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
        // Will not make API call if the user refresh the page
        if (props.location.fromHome) {
            getAllDramas();
        }
    }, []);

    // Search show by filterering while ignoring capital letters, spaces, and hyphens
    const search = () => {
        setFilteredShows(allShows.filter(x=>{
            return (x.name.toLowerCase().replace(/-|\s/g,"").includes(text.toLowerCase().replace(/-|\s/g,"")) && x.poster_path !== null) ||
            (x.original_name.toLowerCase().replace(/-|\s/g,"").includes(text.toLowerCase().replace(/-|\s/g,"")) && x.poster_path !== null);
        }).slice(0, 20));
    }

    return (
        <div>
            <input value={text} onChange={e => {setText(e.target.value); search();}}></input>

            <div className="tvShows">
                {filteredShows !== [] && filteredShows.map(x => {return <TvShow key={x.id} result={x} />})}
            </div>
        </div>
    );
}

export default Search;