import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; 
import '../styles/Header.css'
import fire from '../fire';
import Login from './Login';
import "./Icons.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const axios = require('axios').default;

function Header() {

    const history = useHistory();
    
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    // for login popup
    const [loginPopup, setLoginPopup] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = () => {
        clearErrors();
        let isError = false;
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                isError = true;
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            }).then(() => {
                // closes the popup if user successfully logs in
                if (!isError) {
                    setLoginPopup(false);
                }
                getUserID(email);
            });
    }

    const handleSignup = () => {
        clearErrors();
        let isError = false;
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                isError = true;
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            }).then(() => {
                // Only add new user to database if there are no errors with firebase.
                if (!isError) {
                    // When user successfully sign up, they will be added to database
                    axios.post("https://mykdrama.herokuapp.com/addUser", {
                        username: email
                    }).then(() => {
                        setLoginPopup(false);
                        getUserID(email);
                    });
                }
            });
    }

    const handleLogout = () => {
        fire.auth().signOut();
        localStorage.clear();
        history.push('/home');
        window.scrollTo(0, 0);
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    } 

    // get user id based on email
    // this is used if "user" has not been set yet
    const getUserID = (email) => {
        if (email && email !== "") {
            axios.post('https://mykdrama.herokuapp.com/getUserID', {
                username: email
            }).then((res) => {
                if (res.data[0]) {
                    localStorage.setItem('userID', res.data[0].userID);
                }
                history.push('/home');
            });
        }
    }

    useEffect(() => {
        authListener();
    }, []);

    useEffect(() => {
        // when user sign in, the username will be used to get the user id, which will be stored in local storage
        if (user && user !== "") {
            axios.post('https://mykdrama.herokuapp.com/getUserID', {
                username: user.email
            }).then((res) => {
                if (res.data[0]) {
                    localStorage.setItem('userID', res.data[0].userID);
                }
            });
        }
    }, [user]);


    return (
        <div className="header">
            <ul>
                <li onClick={e => {e.preventDefault(); history.push('/home');}}><FontAwesomeIcon icon="home" size="2x" className="homeIcon" /></li>
                <li onClick={e => {e.preventDefault(); history.push('/search');}}><p>Search</p></li>
                <li onClick={e => {e.preventDefault(); history.push('/myKdrama');}}><p>myKdrama</p></li>             

                {user ? (
                    <li className="loginNav" onClick={handleLogout}><p>Logout</p></li>
                ) : (
                    <li className="loginNav" onClick={e => {e.preventDefault(); setLoginPopup(true);}}><p>Login</p></li>
                )}

                {loginPopup && (
                    <Login 
                        email = {email}
                        setEmail = {setEmail}
                        password = {password}
                        setPassword = {setPassword}
                        handleLogin = {handleLogin}
                        handleSignup = {handleSignup}
                        hasAccount = {hasAccount}
                        setHasAccount = {setHasAccount}
                        emailError = {emailError}
                        passwordError = {passwordError}
                        clearErrors = {clearErrors}
                        clearInputs = {clearInputs}
                        setLoginPopup = {setLoginPopup}
                    />
                )}       
            </ul>
        </div>
    );
}

export default Header;