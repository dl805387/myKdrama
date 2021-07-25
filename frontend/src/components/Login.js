import React from "react";
import "./Icons.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Login.css'

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
        clearInputs,
        setLoginPopup
    } = props;

    
    return (
        <div className="loginPopup">
            <FontAwesomeIcon icon={['far', 'times-circle']} size="4x" className="exit" onClick={e => {e.preventDefault(); setLoginPopup(false); clearErrors(); clearInputs();}} />

            <div className="loginSection">
                <h2 className="loginTitle">Login</h2>

                <div className="bottomSpace">
                    <label className="loginLabel">Username</label>
                    <div className="loginPassword">
                        <FontAwesomeIcon icon="user" size="2x" className="loginIcon" />
                        <input className="loginInput" type="text" placeholder="email address" autoFocus required value={email} onChange={(e) => {setEmail(e.target.value)}} />
                       
                    </div>
                    <p className="error">{emailError}</p>
                </div>

                <label className="loginLabel">Password</label>
                <div className="loginPassword">
                    <FontAwesomeIcon icon="lock" size="2x" className="loginIcon" />
                    <input className="loginInput" type="password" placeholder="at least 6 characters" required value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    
                </div>
                <p className="error">{passwordError}</p>

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