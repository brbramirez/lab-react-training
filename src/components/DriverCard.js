import React from 'react';
import { Rating } from './Rating.js';

const DriverCard = ( {name, rating, img, car} ) => {
  return (
    <div className='container row p-3'>
    <div className='col'>
        <img className='img-driver' src={img} alt="Profile icon"/>
    </div>
    <div className='col'>
        <h3>{name}</h3>
        <Rating children = {rating}/>
        <p>{car.model}</p>
    </div>

    </div>
  )
}

export default DriverCard