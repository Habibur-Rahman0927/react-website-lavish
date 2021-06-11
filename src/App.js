import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from'./Component/Pages/Navbar'
import Home from './Component/HomePage/Home';
import Footer from './Component/Footer/Footer';
import Services from './Component/Services/Services';

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/services" component={Services}/>
            </Switch>
            <Footer></Footer>
        </Router>
    );
}

export default App;