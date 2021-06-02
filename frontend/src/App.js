import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Detail from './components/Detail';
import Search from './components/Search';

function App() {

    return (
        <div>     
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path={"/detail/:name"} component={Detail} />
                    <Route exact path={"/search"} component={Search} />
                </Switch>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
