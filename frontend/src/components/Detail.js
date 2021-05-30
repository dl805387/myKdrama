import React, { useState, useEffect } from "react";
import '../styles/Detail.css'
const axios = require('axios').default;

function Detail(props) {

    const [data, setData] = useState({});

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
        if (props.location.id) {
            axios.get("https://api.themoviedb.org/3/tv/" + props.location.id + "?api_key=2c3c49c8f9892c1b17ebf32c4b74bed0&language=en-US")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            });
        }
    }, []);

    // to do
    // design for seasons with backdrop pic

    return ( 
        <div>
            {data !== {} && (
                <div className="detailPage">
                    <div className="detailBody">
                        <p className="detailTitle">{data.name}</p>
                        <p className="bodyText">{data.original_name}</p>
                        <p className="bodyText">{data.first_air_date}</p>

                        <div className="detailRating">
                            <p className="vote">{data.vote_average}/10</p>
                            <div className="starRatings">
                                <div className="starRatingsTop" style={{width: toPercent()}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                <div className="starRatingsBottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                            </div>
                        </div>

                        <p>{strGenre()}</p>
                        <p className="about">!colored right triangle Synopsis</p>
                        <p className="about">{data.overview}</p>

                        <div className="seasons">
                            {data.seasons && data.seasons.map(x => {
                                return (
                                    <div key={x.id}> 
                                        <p>{x.name}</p>
                                        <p>{x.episode_count} episodes</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    
                    {data.backdrop_path && (
                        <div className="backdrop" style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + data.backdrop_path})`}}></div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Detail;