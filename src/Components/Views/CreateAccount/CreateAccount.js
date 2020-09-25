import React from 'react';

const CreateAccount = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-8 mx-auto">
                    <form>
                        <h4>Create Account</h4>
                        <div className="row">
                            <div className="col-sm-12">
                            <div class="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="example"
                                        placeholder="FirstName"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                            <div class="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="example"
                                        placeholder="Last Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="example"
                                        placeholder="Username or Email"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div class="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="example"
                                        placeholder="Password"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div class="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="example"
                                        placeholder="Confirm Password"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col--sm-12">
                                <p>Don't have any account?
                                    <a href="">Create Account</a>
                                </p>
                            </div>
                        </div>
                    </form>

                    <h3>OR</h3>
                    <button>Continue with Google</button>
                    <button className="mt-3">continue With Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;