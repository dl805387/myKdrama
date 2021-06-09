import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Detail from './components/Detail';
import Search from './components/Search';
import MyKdrama from './components/MyKdrama';
const axios = require('axios').default;

function App() {

    // this is used to take the user to a loading page while server is "asleep"
    const [sleep, setSleep] = useState(true);

    useEffect(() => {
        // call to server to wake up heroku hosting
        axios.get('https://mykdrama.herokuapp.com/').then(() => {
            setSleep(false);
        });
    }, []);


    return (
        <div>     
            {sleep ? (
                <div className="sleepCover">
                    <div className="sleepScreen">
                        <div className="col-3">
                            <div className="snippet" data-title=".dot-spin">
                                <div className="stage">
                                    <div className="dot-spin"></div>
                                </div>
                            </div>
                        </div>
                        <p>Connecting to server</p>
                        <p>Please wait a few seconds</p>
                        <p>Backend hosted on Heroku</p>
                    </div>
                </div>
            ) : (
                <Router>
                    <Header />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route path={"/detail/:name"} component={Detail} />
                        <Route exact path={"/search"} component={Search} />
                        <Route exact path={"/myKdrama"} component={MyKdrama} />
                    </Switch>

                    <Footer />
                </Router>
            )}
        </div>
    );
}

export default App;
