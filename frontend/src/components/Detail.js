import React, { useState, useEffect } from "react";
import '../styles/Detail.css'
import "./Icons.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TvShow from '../components/TvShow';
const axios = require('axios').default;

function Detail(props) {

    const [data, setData] = useState({});
    const [recs, setRecs] = useState([]);
    const [noRecs, setNoRecs] = useState(false);

    // lets the user know if the show has already been added to watched/watch later
    const [watchedOption, setWatchedOption] = useState("notValid");
    const [watchlaterOption, setWatchlaterOption] = useState("notValid");

    const toPercent = () => {
        return parseFloat((data.vote_average * 10).toFixed(2)) + "%";
    }

    const strGenre = () => {
        if (!data.genres) {
            return "";
        }
        let str = "Genres: ";
        for (let i = 0; i < data.genres.length; i++) {
            if (i < data.genres.length - 1) {
                str = str + data.genres[i].name + ", ";
            } else {
                str = str + data.genres[i].name;
            }
        }
        return str;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (true) {
            // Fetch API to get details of the drama
            axios.get("https://api.themoviedb.org/3/tv/" + localStorage.getItem('locationID') + "?api_key=2c3c49c8f9892c1b17ebf32c4b74bed0&language=en-US")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
                existWatched(res.data);
                existWatchlater(res.data);
            });

            // Fetch API to get recommendations
            axios.get("https://api.themoviedb.org/3/tv/" + localStorage.getItem('locationID') + "/recommendations?api_key=2c3c49c8f9892c1b17ebf32c4b74bed0&language=en-US&page=1")
            .then((res) => {
                // Filter the recommendations to only have korean shows
                const onlyKo = res.data.results.filter(x=>{
                    return x.original_language === "ko" && x.poster_path !== null;
                });
                setRecs(onlyKo);
                // Lets the user know if there are no recommendations
                if (onlyKo.length === 0) {
                    setNoRecs(true);
                }
            });
        }
    }, [props.location]);


    

    // checks to see if the show already exists in watched
    const existWatched = (data) => {
        console.log(data.id);
        axios.post("https://mykdrama.herokuapp.com/existWatched", {
            userID: localStorage.getItem('userID'),
            showID: data.id
        }).then((res) => {
            console.log("success");
            let exist;
            // Grabs the value of the first property in the object, which is the value to determine if this exist in database
            // If its 0, that means it doesnt exist in our database. But if its not 0, then it does exist in our database
            for (var x in res.data[0]) {
                exist = res.data[0][x];
                break;
            }
            console.log(exist);
            // only add to watched if show is not currently in watched
            if (exist === 0) {
                setWatchedOption("valid");
            }
        });
    }

    // checks to see if the show already exists in watched
    const existWatchlater = (data) => {
        axios.post("https://mykdrama.herokuapp.com/existWatchlater", {
            userID: localStorage.getItem('userID'),
            showID: data.id
        }).then((res) => {
            console.log("success");
            let exist;
            for (var x in res.data[0]) {
                exist = res.data[0][x];
                break;
            }
            console.log(exist);
            if (exist === 0) {
                setWatchlaterOption("valid");
            }
        });
    }

    // add show to watched in database
    const addWatched = () => {
        if (watchedOption === "valid") {
            axios.post("https://mykdrama.herokuapp.com/addWatched", {
                userID: localStorage.getItem('userID'),
                poster: data.poster_path,
                name: data.name,
                showID: data.id
            }).then(() => {
                console.log("success");
                setWatchedOption("notValid");
            });
        }
    }

    // add show to watch later in database
    const addWatchlater = () => {
        if (watchlaterOption === "valid") {
            axios.post("https://mykdrama.herokuapp.com/addWatchlater", {
                userID: localStorage.getItem('userID'),
                poster: data.poster_path,
                name: data.name,
                showID: data.id
            }).then(() => {
                console.log("success");
                setWatchlaterOption("notValid");
            });
        }
    }


    return ( 
        <div>
        {data !== {} && (
            <div className="detailPage">
                <div className="detailUpper">
                    <div className="detailBody">
                        <p className="detailTitle">{data.name}</p>
                        {data.poster_path && (<img className="poster" src={"https://image.tmdb.org/t/p/w200" + data.poster_path} alt={data.name}></img>)}
                        <p className="bodyText">{data.original_name}</p>
                        <p className="bodyText">{data.first_air_date}</p>

                        <div className="detailRating">
                            <p className="vote">{data.vote_average}/10</p>
                            <div className="starRatings">
                                <div className="starRatingsTop" style={{width: toPercent()}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                <div className="starRatingsBottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                            </div>
                        </div>

                        <p className="bodyText">{strGenre()}</p>
                        <p className="bodyText">Seasons: {data.number_of_seasons}</p>
                        <p className="bodyText">Episodes: {data.number_of_episodes}</p>

                        <div className="iconWithText">
                            <FontAwesomeIcon icon="angle-double-right" size="2x" className="angleRight"/>
                            <p className="subTitle">Synopsis</p>
                        </div>
                        <p className="synopsis">{data.overview}</p>

                        <button className={watchedOption} onClick={e => {e.preventDefault(); addWatched();}}>add to watched</button>
                        <button className={watchlaterOption}  onClick={e => {e.preventDefault(); addWatchlater();}}>add to watch later</button>
                    </div>
                    
                    {data.backdrop_path && (
                        <div className="backdrop" style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + data.backdrop_path})`}}></div>
                    )}
                </div>

                
                <button onClick={e => {e.preventDefault(); console.log(watchedOption); console.log(watchlaterOption);}}>click to see options</button>

                <div className="detailLower">
                    <div className="iconWithText">
                        <FontAwesomeIcon icon="angle-double-right" size="2x" className="angleRight orange"/>
                        <p className="subTitle">Recommendations</p>
                    </div>

                    <div className="scroll">
                        <div className="recommendations">
                            {recs !== [] && recs.map(x => {return <TvShow key={x.id} result={x} reco={true} userID={localStorage.getItem('userID')} />})}
                        </div>

                        {noRecs && (
                            <div className="iconWithText">
                                <p className="message">No Recommendations</p>
                                <FontAwesomeIcon icon="sad-tear" size="2x" className="orange"/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}

export default Detail;