import React from 'react';
import {Link} from 'react-router-dom';
import './PlaceCard.css'

const PlaceCard = (props) => {
    const place = props.place;
    const {name, url} = place;
    return (
        <div className="col-lg-4 col-sm-12">
            <Link to={`/booking/${name}`}>
                <div className="card">
                    <div className="card-header">
                        <h2>{name}</h2>
                    </div>
                    <div className="card-body">
                        <figure>
                            <img src={url} alt="" className="img-fluid place-img"/>
                        </figure>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default PlaceCard;