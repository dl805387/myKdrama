import React, { useState, useEffect } from "react";
import fire from '../fire';
import "./Icons.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const axios = require('axios').default;

function Login() {

    //const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

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
                // this can be done by checking user
                // might not even need isError
                if (user) {
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
        authListener();
    }, []);

    return (
        <div>
            <div className="loginSection">

                <h2 className="loginTitle">Login</h2>

                <div className="bottomSpace">
                    <label className="loginLabel">Username</label>
                    <div className="loginPassword">
                        <FontAwesomeIcon icon="user" size="2x" className="loginIcon" />
                        <input className="loginInput" type="text" placeholder="pseudo email address" autoFocus required value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        <p className="error">{emailError}</p>
                    </div>
                </div>

                <label className="loginLabel">Password</label>
                <div className="loginPassword">
                    <FontAwesomeIcon icon="lock" size="2x" className="loginIcon" />
                    <input className="loginInput" type="password" placeholder="at least 6 characters" required value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    <p className="error">{passwordError}</p>
                </div>

                <div>
                    {hasAccount ? (
                        <>
                            <button className="signBtn" onClick={handleLogin}>Sign In</button>
                            <p className="loginMessage">Don't have an account ? <span className="signLabel" onClick={() => {setHasAccount(!hasAccount); clearErrors(); clearInputs();}}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                            <button className="signBtn" onClick={handleSignup}>Sign Up</button>
                            <p className="loginMessage">Have an account ? <span className="signLabel" onClick={() => {setHasAccount(!hasAccount); clearErrors(); clearInputs();}}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>

            <button onClick={handleLogout}>logout</button>
        </div>
    ); 
}

export default Login;
