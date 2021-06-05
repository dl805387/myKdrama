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
        history.push("/home");
        authListener();
    }, []);

    useEffect(() => {
        console.log("testing");
        // when user sign in, this will get the userID and other data
        if (user !== "") {
            axios.post('https://mykdrama.herokuapp.com/getUserID', {
                username: user.email
            }).then((res) => {
                setUserID(res.data[0].userID);
                console.log(res.data);
            });
        }
    }, [user]);

    // to do
    // add comments 

    // if userid is 0, then user cant add shows to watched or watch later

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