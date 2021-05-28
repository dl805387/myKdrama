import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Name from './components/Name';

function App() {

    return (
        <div>     
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/name" component={Name} />
                </Switch>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
