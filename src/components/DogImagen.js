import React from 'react';
import {Spinner} from './Spinner';

export const DogImagen = ({ dog, loading}) => {
    if(loading) return <Spinner />
    return (
        <div className='card bounce'>
            <img 
            src={dog.image} 
            alt="dog" />
            <p><b>Características: </b>{dog.breed.temperament}</p>
            <p><b>Vida: </b>{dog.breed.life_span}</p>
        </div>
    )
};