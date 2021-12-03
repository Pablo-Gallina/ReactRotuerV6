import React from 'react'
import { useParams } from 'react-router'

export const CharacterScreen = () => {
    //Desescructurando el parametro
    const {id} = useParams();

    return (
        <div>
          <h1>{id}</h1>  
        </div>
    )
}
