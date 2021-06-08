import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
import "./Icons.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/DramaCard.css'
const axios = require('axios').default;

function DramaCard(props) {

    const history = useHistory();
    const {data, dramaID, fromWatched} = props;
    const [isRemove, setIsRemove] = useState(true);

    // remove show from database either from watched or watch later
    const remove = (dramaID) => {
        if (fromWatched) {
            axios.post('https://mykdrama.herokuapp.com/deleteWatched', {
                watchedID: dramaID
            }).then(() => {
                console.log("success");
                setIsRemove(false);
            });
        } else {
            axios.post('https://mykdrama.herokuapp.com/deleteWatchlater', {
                watchlaterID: dramaID
            }).then(() => {
                console.log("success");
                setIsRemove(false);
            });
        }
    }


    return (
        <div className="dramaCard">
            {isRemove && (
                <div key={data.showID}>
                    
                    <img className="cardPic" 
                        onClick={() => {
                            localStorage.setItem('showID', data.showID);
                            history.push('/detail/' + data.name.replace(/\s/g, ''))
                        }}
                        src={"https://image.tmdb.org/t/p/w400" + data.poster} alt={data.name}>
                    </img>
                    
                    <div className="onTop">
                        <div className="circle">
                            <FontAwesomeIcon icon="trash-alt" size="2x" className="trashIcon" onClick={e => {e.preventDefault(); remove(dramaID)}} />
                        </div>
                    </div>
                    
                </div>
            )}
        </div>
    );
}

export default DramaCard;