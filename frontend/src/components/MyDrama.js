import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; 
import '../styles/watch.css'
const axios = require('axios').default;

function MyDrama(props) {

    const history = useHistory();
    const {userID, x, dramaID, fromWatched} = props;
    const [isRemove, setIsRemove] = useState(true);

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
        <div>
            {isRemove && (
                <div key={x.showID}>
                    <p>{x.name}</p>
                    <img className="watchShow" onClick={() => {history.push({
                        pathname: '/detail/' + x.name.replace(/\s/g, ''),
                        id: x.showID,
                        userID: userID
                    })}} src={"https://image.tmdb.org/t/p/w200" + x.poster} alt={x.name}></img>

                    <button onClick={e => {e.preventDefault(); remove(dramaID)}}>delete</button>
                </div>
            )}
        </div>
    );
}

export default MyDrama;