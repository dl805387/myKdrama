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
                history.push('/home');
                window.scrollTo(0, 0);
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
                        console.log("success");
                        setLoginPopup(false);
                        getUserID(email);
                    });
                }
                history.push('/home');
                window.scrollTo(0, 0);
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
                console.log("got user id");
                if (res.data[0]) {
                    localStorage.setItem('userID', res.data[0].userID);
                }
            })
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
                console.log("got user id");
                if (res.data[0]) {
                    localStorage.setItem('userID', res.data[0].userID);
                }
            })
        }
    }, [user]);

    




    // to do
    // add comments 

    // make the footer
    // mention API and put in your name
    // also make the footer at the bottom
    // ^ such as if the page is too short in search, watched, watch later
    // min height prolly not a good solution
    // maybe float bottom?

    // on watched page, if user isnt logged in then tell user to log in
    
    // make navbar mogile friendly
    // navbar not mobile friendly right now


    // design watched and watch later page, and make it mobile friendly

    // maybe change page button color


    // change the project name on the browser
    // change logo


    // let user know if api calls all used up

    // when you finish with everything, make sure that the server file is updated on pushed


    // when you make loading page, set the cursor style to wait

    // might be a bug when refresh for first time; not sure
    // the issue is that the server is asleep
    // so history.push is delayed
    // when u refresh, useeffect gets called, then it gets called again when user changed
    // a fix could be to make a call to the server every 25 mins
    // prolly will make a server call when user signs in

    // remove comments when u finish
    // proofread comments too
    // make sure none says things from fitness dashboard
    // proofread server file too

    // add text to readme

    return (
        <div className="header">
            <ul>
                <li onClick={e => {e.preventDefault(); history.push('/home');}}><FontAwesomeIcon icon="home" size="2x" /></li>

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

                <button onClick={e => {e.preventDefault(); console.log(localStorage.getItem('userID')); console.log(email);}}>see local storage</button>
                
            </ul>
        </div>
    );
}

export default Header;