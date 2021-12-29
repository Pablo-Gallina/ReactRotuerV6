import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Characters } from '../models/Characters';

export const CharacterScreen = () => {
    //Desescructurando el parametro
    const {id} = useParams();

    const navigate = useNavigate()

    const {type, name, description} = Characters.find(character => character.id === id);

    const path = `/assets/${type}-${id}.png`;

    //Regresar un paso atras en el historial de navegacion
    const handleBack = ()=> {
        navigate(-1); //-1, regresar a la pagina anterior
    }

    return (
        <div>
            <button onClick={handleBack} className="btn btn-primary">Regresar</button>
            <h1>{id}</h1>  
            <img src={path} alt={id} />
        </div>
    )
}
