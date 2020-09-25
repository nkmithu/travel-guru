import React, {useContext, useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Controllers/firebase.config';
import { UserContext } from '../../../App';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const CreateAccount = () => {
    const [user,
        setUser] = useState({});
    const newUser = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    const handleBlur = (e) => {
        if (e.target.name === 'firstname') {
            newUser.firstName = e.target.value;
        }
        if (e.target.name === 'lastname') {
            newUser.lastName = e.target.value;
        }
        if (e.target.name === 'email') {
            newUser.email = e.target.value;
        }
        if (e.target.name === 'password') {
            newUser.password = e.target.value;
        }

        setUser(newUser);
        console.log(user);

        
    }

    const handleCreateUser=(e)=>{
        console.log(user.firstName);
        firebase.auth().createUserWithEmailAndPassword(user.firstName, user.password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });

          e.preventDefault();
    }


    const history = useHistory();
    const location = useLocation();

    const {from} = location.state || {
        from: {
            pathname: "/"
        }
    };
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

    
const [loggedInUser,
    setLoggedInUser] = useContext(UserContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-8 mx-auto">
                    <form onSubmit={handleCreateUser}>
                        <h4>Create Account</h4>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <input onBlur={handleBlur}
                                        type="text"
                                        name="firstname"
                                        className="form-control"
                                        placeholder="FirstName"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <input onBlur={handleBlur}
                                        type="text"
                                        name="lirstname"
                                        className="form-control"
                                        placeholder="Last Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <input onBlur={handleBlur} type="mail" name="email" className="form-control" placeholder="Email"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <input onBlur={handleBlur}
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <input type="submit" className="form-control" value="Submit"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col--sm-12">
                                <p>Already have account?
                                    <Link to="/login">Login</Link>
                                </p>
                            </div>
                        </div>
                    </form>

                    <h3>OR</h3>
                    <button onClick={handleGoogleSignIn}>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;