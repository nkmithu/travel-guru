import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Views/Home/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Booking from './Components/Views/Booking/Booking';
import Login from './Components/Views/Login/Login';
import CreateAccount from './Components/Views/CreateAccount/CreateAccount';
import PrivateRoute from './Components/Controllers/PrivateRoute/PrivateRoute';
import HotelsMap from './Components/Views/Hotels-Map/HotelsMap';
import Header from './Components/Views/Header/Header';

export const UserContext = createContext();
function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
                <PrivateRoute path="/user/:name">
                    <HotelsMap/>
                </PrivateRoute>
            </Switch>
        </Router>
        </UserContext.Provider>
    )
}

export default App;
