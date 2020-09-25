import React from 'react';
import {Link} from 'react-router-dom';
import './PlaceCard.css'

const PlaceCard = (props) => {
    const place = props.place;
    const {name, url} = place;
    return (
        <div className="col-lg-4 col-sm-12">
            <Link to={`/booking/${name}`}>
                <div className="card place-card">
                    <figure className="h-100">
                        <div className="overlay"></div>
                        <img src={url} alt="" className="img-fluid place-img h-100"/>

                        <h2 className="place-card-name">{name}</h2>
                    </figure>

                </div>
            </Link>

        </div>
    );
};

export default PlaceCard;