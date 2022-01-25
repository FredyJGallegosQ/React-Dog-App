import React, { useEffect, useState } from 'react';
import { DogImagen } from './components/DogImagen';
import { Razas } from './components/Razas';
import { getDog } from './helpers/getDog';

const initialDog = {
    image: "",
    breed: {
        id: 0,
        name: ""
    }
}
export const DogApp = () => {
    const [Dog, setDog] = useState(initialDog);
    const [Loading, setLoading] = useState(false);
    const CargarDog = (breedId) => {
        setLoading(true);
        getDog(breedId)
            .then((Dog) => {
              setDog(Dog);
              setLoading(false);
          })
    }
    useEffect(() => {
        CargarDog();
    }, []);
    
    return <div className='App'>
        <h1>//****Dog App****\\</h1>
        <Razas 
            CargarDog = {CargarDog}
        />,
        <DogImagen 
            dog={Dog}
            loading={Loading}
        />,
        <button className='button'
          onClick = {() => CargarDog(Dog.breed.id)}>Siguiente</button>
    </div>;
};