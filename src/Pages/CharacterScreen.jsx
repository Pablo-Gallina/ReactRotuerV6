import React from 'react'
import { useParams } from 'react-router'
import { Characters } from '../models/Characters';

export const CharacterScreen = () => {
    //Desescructurando el parametro
    const {id} = useParams();

    const {type, name, description} = Characters.find(character => character.id === id);

    const path = `/assets/${type}-${id}.png`;

    return (
        <div>
          <h1>{id}</h1>  
          <img src={path} alt={id} />
        </div>
    )
}
