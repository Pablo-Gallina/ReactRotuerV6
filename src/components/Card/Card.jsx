import React from 'react'
import {Link} from 'react-router-dom';

const Card = ({id, name, description, type}) => {
    const path = `/assets/${type}-${id}.png`;
    return (
        <div>
            <h1>{name}</h1>
            {/* <img src={path} alt={id} /> */}
            <Link className="card-link" to={`/character/${id}`}>
            VER MAS...
            </Link>
        </div>
    )
}

export default Card
