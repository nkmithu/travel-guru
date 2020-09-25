import React, {useEffect, useState} from 'react';
import places from '../../Models/places'
import Booking from '../Booking/Booking';
import PlaceCard from '../PlaceCard/PlaceCard';

const Home = () => {
    const [allPlaces, setPlaces] = useState([]);
    useEffect(() => {
        const getPlaces = places;
        setPlaces(getPlaces);
    }, [])
    console.log(allPlaces);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <article>
                        <h1>Cox's Bazar</h1>
                    </article>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <div className="row">
                        {
                            allPlaces.map(singlePlace => <PlaceCard key={singlePlace.hotelId} place={singlePlace}></PlaceCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;