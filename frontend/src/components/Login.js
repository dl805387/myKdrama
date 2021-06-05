import React, { useState, useEffect } from "react";
import "./Icons.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Login.css'
const axios = require('axios').default;

function Login(props) {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        clearErrors,
        clearInputs
    } = props;

    return (
        <div className="loginPopup">
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
        </div>
    );
}

export default Login;
