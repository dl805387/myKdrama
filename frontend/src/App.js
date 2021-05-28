import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Display from './components/Display';
import Header from './components/Header';
import Name from './components/Name';

function App() {

    const history = useHistory();

    useEffect(() => {
        //history.push("/home");
    }, []);

    return (
        <div>     
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/home" component={Display} />
                    <Route exact path="/name" component={Name} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
