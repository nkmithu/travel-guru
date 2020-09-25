import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import places from '../../Models/places';

const Booking = () => {
    const {name} = useParams();
    const [place,
        setPlace] = useState({})
    useEffect(() => {
        const allPlaces = places;

        let singlePlace = allPlaces.filter(place => {
            return place.name === name;
        });

        setPlace(singlePlace);
        console.log(singlePlace);
    }, [])

    console.log(place.name);
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <h1>{name}</h1>
                    <p>{place.description}</p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <form action="">
                        <div className="row">
                            <div className="col-sm-12">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Origin</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="example"
                                        placeholder="Place Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Destination</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="example"
                                        placeholder="Place Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">From</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="example"
                                        placeholder="Place Name"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">To</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="example"
                                        placeholder="Place Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <button>Start Booking</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;