import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Detail from './components/Detail';
import Search from './components/Search';
import MyKdrama from './components/MyKdrama';

function App() {

    // to do
    // make a call to the backend to get it to wake up
    // make the user wait a while until it finishes

    return (
        <div>     
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path={"/detail/:name"} component={Detail} />
                    <Route exact path={"/search"} component={Search} />
                    <Route exact path={"/myKdrama"} component={MyKdrama} />
                </Switch>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
