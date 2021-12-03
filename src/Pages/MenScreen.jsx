import React from 'react'
import Card from '../components/Card/Card';
import { Characters } from '../models/Characters'

const MenScreen = () => {
    const men = Characters.filter(character => character.type === "h");
    return (
        <>
            <h1>Men</h1>   
            <div className="container">
                <div>
                    {men.map(_men => <Card key={_men.id} {..._men} />)}
                </div>
            </div>
        </>
    )
}

export default MenScreen
