import React, {useEffect, useState} from 'react';
import places from '../../Models/places'
import Booking from '../Booking/Booking';
import Header from '../Header/Header';
import PlaceCard from '../PlaceCard/PlaceCard';
import './Home.css';

const Home = () => {
    const [allPlaces,
        setPlaces] = useState([]);
    useEffect(() => {
        const getPlaces = places;
        setPlaces(getPlaces);
    }, [])

    return (
        <div className="container-fluid bg-img">
            <div className="overlay"></div>
            <Header/>
            <div className="row h-100">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-4 col-sm-12">
                            <article>
                                <h1 className="text-white">Cox's Bazar</h1>
                            </article>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="row">
                                {allPlaces.map(singlePlace => <PlaceCard key={singlePlace.hotelId} place={singlePlace}></PlaceCard>)
}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;