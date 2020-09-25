import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Views/Home/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Booking from './Components/Views/Booking/Booking';
import Login from './Components/Views/Login/Login';
import CreateAccount from './Components/Views/CreateAccount/CreateAccount';
import UserPanel from './Components/Views/UserPanel-Map/UserPanel';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/booking/:name">
                    <Booking/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/createAc">
                    <CreateAccount/>
                </Route>
                <Route path="/user">
                    <UserPanel/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
