import React from 'react';
import './SingleHotel.css';
const SingleHotel = (props) => {
    const hotel = props.hotel;
    const {name, description, rating, url, price} = hotel;
    return (
        <div className="row">
            <div className="col-lg-6">
                <figure>
                    <img src={url} alt="" className="img-fluid hotel-img"></img>
                </figure>
            </div>
            <div className="col-lg-6">
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Rating: {rating}</p>
                <h5>${price}</h5>
            </div>
        </div>
    );
};

export default SingleHotel;