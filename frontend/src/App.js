import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {

    return (
        <div>     
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path={"/detail/:id"} component={Detail} />
                </Switch>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
