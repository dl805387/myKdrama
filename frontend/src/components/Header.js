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
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
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
                // //Only add new user to database if there are no errors with firebase.
                // if (!isError) {
                //     // When user successfully sign up, they will be added to database
                //     axios.post('http://localhost:3001/addUser', {
                //         username: email
                //     }).then(() => {
                //         //console.log("success");
                //     });
                // } 
                //when users successfully login, then history.push to home
                if (!isError) {
                    // When user successfully sign up, they will be added to database
                    axios.post("https://mykdrama.herokuapp.com/addUser", {
                        username: email
                    }).then(() => {
                        console.log("success");
                    });
                }
                // ^ works
                // but be careful, if you dont logout, then it could be a problem
                // if user already sign in, then they cant log in, only log out
            });
    }

    const handleLogout = () => {
        fire.auth().signOut();
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
                <li onClick={e => {e.preventDefault(); setLoginPopup(true);}}>Login</li>

<button onClick={handleLogout}>logout</button>
<button onClick={e => {e.preventDefault(); console.log("user:"); console.log(user);}}>see user</button>

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