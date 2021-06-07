import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; 
import '../styles/Header.css'
import fire from '../fire';
import Login from './Login';
const axios = require('axios').default;

function Header(props) {

    const history = useHistory();
    
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    // for login popup
    const [loginPopup, setLoginPopup] = useState(false);
    const [userID, setUserID] = useState(0);

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
                    });
                }
            });
    }

    const handleLogout = () => {
        fire.auth().signOut();
        setUserID(0);
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

    useEffect(() => {
        authListener();
    }, []);

    useEffect(() => {
        // when user sign in, this will get the userID and other data
        if (user !== "") {
            axios.post('https://mykdrama.herokuapp.com/getUserID', {
                username: user.email
            }).then((res) => {
                setUserID(res.data[0].userID);
                console.log("got user id");
                // takes the user to the homepage and pass through the user id
                history.push({
                    pathname: '/home',
                    userID: res.data[0].userID
                });
            });
        } else {
            history.push({
                pathname: '/home',
                userID: userID
            });
        }
    }, [user]);

    // to do
    // add comments 

    // if userid is 0, then user cant add shows to watched or watch later

    // might be a bug when refresh for first time; not sure
    // the issue is that the server is asleep
    // so history.push is delayed
    // when u refresh, useeffect gets called, then it gets called again when user changed
    // a fix could be to make a call to the server every 25 mins

    return (
        <div className="header">
            <ul>
                <li onClick={e => {e.preventDefault(); history.push({
                    pathname: '/home',
                    userID: userID
                });}}>Home</li>

                <li onClick={e => {e.preventDefault(); history.push({
                    pathname: '/search',
                    userID: userID,
                    fromHome: true
                });}}>Search</li>

                <li onClick={e => {e.preventDefault(); history.push({
                    pathname: '/watched',
                    userID: userID,
                    fromHome: true
                });}}>Watched</li>    

                <li onClick={e => {e.preventDefault(); history.push({
                    pathname: '/watchlater',
                    userID: userID,
                    fromHome: true
                });}}>Watch Later</li>             

                {user ? (
                    <li onClick={handleLogout}>Logout</li>
                ) : (
                    <li onClick={e => {e.preventDefault(); setLoginPopup(true);}}>Login</li>
                )}
                


                <button onClick={e => {e.preventDefault(); console.log("user:"); console.log(user); console.log("id is " + userID)}}>see user</button>

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
                    />
                )}
                
            </ul>

            
            
        </div>
    );
}

export default Header;