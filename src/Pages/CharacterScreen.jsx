import React from 'react'
import { useParams } from 'react-router'
import { Characters } from '../models/Characters';

export const CharacterScreen = ({history}) => {
    //Desescructurando el parametro
    const {id} = useParams();

    const {type, name, description} = Characters.find(character => character.id === id);

    const path = `/assets/${type}-${id}.png`;

    //Regresar un paso atras en el historial de navegacion
    const handleBack = ()=> {
        history.goBack(); //Recibimos como parametro (siempre llega)
    }

    return (
        <div>
            <button onClick={handleBack} className="btn btn-primary">Regresar</button>
            <h1>{id}</h1>  
            <img src={path} alt={id} />
        </div>
    )
}
