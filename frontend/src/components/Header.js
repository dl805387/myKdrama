import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; 
import '../styles/Header.css'
const axios = require('axios').default;

function Header(props) {

    const history = useHistory();
    //const [user, setUser] = useState("");

    useEffect(() => {
        history.push("/home");
    }, []);

    return (
        <div className="header">
            <ul>
                <li onClick={e => {e.preventDefault(); history.push({
                    pathname: '/home'
                });}}>Home</li>
                <li onClick={e => {e.preventDefault(); history.push({
                    pathname: '/search',
                    fromHome: true
                });}}>Search</li>
                <li onClick={e => {e.preventDefault(); history.push({
                    pathname: '/login',
                    fromHome: true
                });}}>Login</li>
            </ul>
        </div>
    );
}

export default Header;