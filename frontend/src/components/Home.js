import React, { useState, useEffect } from "react";
import TvShow from '../components/TvShow';
import '../styles/Home.css'
const axios = require('axios').default;

function Home(props) {

    const apiKey = "2c3c49c8f9892c1b17ebf32c4b74bed0";
    const [currPage, setCurrPage] = useState(1);
    const [tvShows, setTvShows] = useState([]);

    // Fetch API to get popular K dramas with page number
    const discover = (pageNum) => {
        axios.get("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&page=" + pageNum + 
        "&with_genres=18&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate")
        .then((res) => {
            // Filter by korean language and must have poster picture
            const onlyKo = res.data.results.filter(x=>{
                return x.original_language === "ko" && x.poster_path !== null;
            });
            setTvShows(onlyKo);
            setCurrPage(pageNum);
        });
    }

    // Used to change the color of the page button if its the current page
    const isCurrPage = (pageNum) => {
        if (pageNum === currPage) {
            return "pageBtn currPage";
        } else {
            return "pageBtn";
        }
    }

    useEffect(() => {
        discover(1);
    }, []);

    // When user change page, the screen will be scrolled to the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currPage]);

    return (
        <div>
            <div className="pagesSection forMobile">
                <button className={isCurrPage(1)} onClick={e => {e.preventDefault(); discover(1);}}>1</button>
                <button className={isCurrPage(2)} onClick={e => {e.preventDefault(); discover(2);}}>2</button>
                <button className={isCurrPage(3)} onClick={e => {e.preventDefault(); discover(3);}}>3</button>
                <button className={isCurrPage(4)} onClick={e => {e.preventDefault(); discover(4);}}>4</button>
                <button className={isCurrPage(5)} onClick={e => {e.preventDefault(); discover(5);}}>5</button>
                <button className={isCurrPage(6) + " btnEnd"} onClick={e => {e.preventDefault(); discover(6);}}>6</button>
                <button className={isCurrPage(7) + " btnEnd"} onClick={e => {e.preventDefault(); discover(7);}}>7</button>
                <button className={isCurrPage(8) + " btnEnd"} onClick={e => {e.preventDefault(); discover(8);}}>8</button>
                <button className={isCurrPage(9) + " btnLast"} onClick={e => {e.preventDefault(); discover(9);}}>9</button>
            </div>

            <div className="tvShows">
                {tvShows !== [] && tvShows.map(x => {return <TvShow key={x.id} result={x} userID={localStorage.getItem('userID')} />})}
            </div>

            <div className="pagesSection">
                <button className={isCurrPage(1)} onClick={e => {e.preventDefault(); discover(1);}}>1</button>
                <button className={isCurrPage(2)} onClick={e => {e.preventDefault(); discover(2);}}>2</button>
                <button className={isCurrPage(3)} onClick={e => {e.preventDefault(); discover(3);}}>3</button>
                <button className={isCurrPage(4)} onClick={e => {e.preventDefault(); discover(4);}}>4</button>
                <button className={isCurrPage(5)} onClick={e => {e.preventDefault(); discover(5);}}>5</button>
                <button className={isCurrPage(6) + " btnEnd"} onClick={e => {e.preventDefault(); discover(6);}}>6</button>
                <button className={isCurrPage(7) + " btnEnd"} onClick={e => {e.preventDefault(); discover(7);}}>7</button>
                <button className={isCurrPage(8) + " btnEnd"} onClick={e => {e.preventDefault(); discover(8);}}>8</button>
                <button className={isCurrPage(9) + " btnLast"} onClick={e => {e.preventDefault(); discover(9);}}>9</button>
            </div>
        </div>
    );
}

export default Home;