import React, {useContext, useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Controllers/firebase.config';
import {UserContext} from '../../../App';
import Header from '../Header/Header';
import './Login.css'

const Login = () => {

    const [loggedInUser,
        setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const {from} = location.state || {
        from: {
            pathname: "/"
        }
    };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [user, setUser]= useState({});

    const handleGoogleSignIn = () => {

        var provider = new firebase
            .auth
            .GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                const {displayName, email} = user;
                const signedINUser = {
                    name: displayName,
                    email: email
                }
                setLoggedInUser(signedINUser);
                history.replace(from);
                // ...
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }


    return (
        <div className="container login-page">
            <Header/>
            <div className="row">
                <div className="col-lg-4 offset-lg-8 mx-auto">
                    <form>
                        <h4>Login</h4>
                        <p>Name: {loggedInUser.name}</p>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        id="loginName"
                                        placeholder="Username or Email"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="loginPassword"
                                        placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Log in"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col--sm-12">
                                <p>Don't have any account?
                                    <Link to="/createAc">Create Account</Link>
                                </p>
                            </div>
                        </div>
                    </form>

                    <h3 className="text-center mt-5">OR</h3>
                    <button className="google-btn" onClick={handleGoogleSignIn}><img className="google-icon" src={require('../../../Icon/google.png')} alt=""/> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;