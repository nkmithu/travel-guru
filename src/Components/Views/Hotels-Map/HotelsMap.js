import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import hotels from '../../Models/hotels';
import Header from '../Header/Header';
import SingleHotel from '../SingleHotel/SingleHotel';

const HotelsMap = () => {
    const {name} = useParams();
    const [hotelsArr, setHotelsArr] = useState([]);
    useEffect(()=>{
        const allHotels = hotels;
        let hotelsByPlaceNameArr = allHotels.filter(hotel=>{
            return hotel.placeName === name;
        })
        setHotelsArr(hotelsByPlaceNameArr);
    }, [])


    return (
        <div className="container login-page">
            <Header/>
            <div className="row">
                <div className="col-sm-12">
                    <h4>Stay in {name}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7 col-sm-12">
                   {
                       hotelsArr.map(hotel=> <SingleHotel key={hotel.hotelId} hotel = {hotel}></SingleHotel>)
                   }
                </div>
                <div className="col-lg-5 col-sm-12">

                </div>
            </div>
        </div>
    );
};

export default HotelsMap;