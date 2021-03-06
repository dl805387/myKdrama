import React from "react";
import { useHistory } from "react-router-dom"; 
import '../styles/TvShow.css'

function TvShow(props) {

    const history = useHistory();
    const {result, reco} = props;

    // convert rating to percent with a percent symbol at the end
    const toPercent = () => {
        return parseFloat((result.vote_average * 10).toFixed(2)) + "%";
    }

    // If the tv show is a recommendation, then it will have its own styling
    const isRecoPic = () => {
        if (reco) {
            return "recoPic";
        } else {
            return "showPic";
        }
    }

    // If the tv show is a recommendation, then it will not have "click for more detail!" text
    const isRecoFooter = () => {
        if (reco) {
            return "noFooter";
        } else {
            return "infoFooter"
        }
    }

    
    return (
        <div className="tvShow" 
            onClick={() => {
                localStorage.setItem('showID', result.id);
                history.push('/detail/' + result.name.replace(/\s/g, ''));
            }}
        >
            <img className={isRecoPic()} src={"https://image.tmdb.org/t/p/w500" + result.poster_path} alt={result.name}></img>
            
            <div className="info">
                <p className="showTitle">{result.name}</p>
                <p className="infoBody">First Air Date: {result.first_air_date}</p>
                <p className="infoBody">User Rating: {result.vote_average} /10</p>
                    
                <div className="starRatings">
                    <div className="starRatingsTop" style={{width: toPercent()}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    <div className="starRatingsBottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                </div>

                <p className={isRecoFooter()}>Click for more detail!</p>
            </div>
        </div>
    );
}

export default TvShow;