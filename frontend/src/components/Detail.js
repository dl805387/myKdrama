import React, { useState, useEffect } from "react";
import '../styles/Detail.css'
const axios = require('axios').default;

function Detail(props) {

    const [data, setData] = useState({});

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/tv/" + props.location.id + "?api_key=2c3c49c8f9892c1b17ebf32c4b74bed0&language=en-US")
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    }, []);

    return ( 
        <div>
            {data !== {} && (
                <div className="detailPage">
                    <div className="detailBody">
                        <p>{data.name}</p>
                        <p>{data.original_name}</p>
                        <p>year</p>
                        <p>{data.vote_average}</p>
                        {data.genres && data.genres.map(x => {
                            return <p>{x.name}</p>
                        })}
                        <p>{data.number_of_seasons}</p>
                        <p>{data.number_of_episodes}</p>
                        <p>{data.overview}</p>
                        {data.seasons && data.seasons.map(x => {
                            return (
                                <div>
                                    <p>{x.name}</p>
                                    <p>{x.episode_count}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="backdrop" style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + data.backdrop_path})`}}></div>
                </div>
            )}
        </div>
    );
}

export default Detail;