import React, { useEffect, useState } from 'react';
import { getRaza } from '../helpers/getRaza';

const initialRaza = [
    {
        id: 0,
        name: ' '
    },
]
export const Razas = ({CargarDog}) => {
    const [Razas, setRazas] = useState(initialRaza);
    useEffect(() => {
        CagarRaza();
    }, []);
    
    const CagarRaza = () => {
        getRaza()
            .then((Raza) => {
                setRazas(Raza);
            })
    }
    return (
        <select onChange={(e) => CargarDog(e.target.value)}>
            {Razas.map(Raza => (
                <option
                    value={Raza.id}
                    key={Raza.id}
                >{Raza.name}</option>
            ))}
        </select>
    )
};