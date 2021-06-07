import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
import '../styles/watch.css'
const axios = require('axios').default;

function MyDrama(props) {

    const history = useHistory();
    const {data, dramaID, fromWatched} = props;
    const [isRemove, setIsRemove] = useState(true);

    // remove show from database
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
                <div key={data.showID}>
                    <p>{data.name}</p>
                    <img className="watchShow" onClick={() => {
                        localStorage.setItem('showID', data.showID);
                        history.push(
                         '/detail/' + data.name.replace(/\s/g, '')
                    )}} src={"https://image.tmdb.org/t/p/w200" + data.poster} alt={data.name}></img>

                    <button onClick={e => {e.preventDefault(); remove(dramaID)}}>delete</button>
                </div>
            )}
        </div>
    );
}

export default MyDrama;