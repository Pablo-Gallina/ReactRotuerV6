import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card';
import { Characters } from '../../models/Characters';


const ListadoDatos = ({_filter,_tituloPagina}) => {
    const _dato = Characters.filter(character => character.type === _filter);
    return (
        <>
            <h1>{_tituloPagina}</h1>   
            <div className="container">
                <div>
                    {_dato.map(_men => <Card key={_men.id} {..._men} />)}
                </div>
            </div>
        </>
    )
}

ListadoDatos.propTypes = {
    _filter : PropTypes.string,
    _tituloPagina: PropTypes.string
}

export default ListadoDatos

