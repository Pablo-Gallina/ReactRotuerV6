import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import querystring from 'query-string'
import { Characters } from '../models/Characters'
import Card from '../components/Card/Card'

const SearchScreen = ({history}) => {
    //Acceder a query de la url
    // hook para obtener el location (url)
    const location = useLocation()

    // Desestructurar la querystring
    const { q = "" } = querystring.parse(location.search)
    console.log(q);

    const [search, setSearch] = useState(q);
    const [characters, setCharacters] = useState([])

    const handleChange = (e)=>{
        const value = e.target.value;
        setSearch(value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        //Agregar un query param al path (para realizar la busqueda)
        history.push(`?q=${search}`)
    }

    const getCharacters = () => {
        // si search, es diferente a, ignorando los espacios (trim) vacio
        if (search.trim() !== "") {
            const value = search.toLocaleLowerCase();
            // Filtrar los character, si estos incluyen las letras/palabras que se esta buscando
            const charactersResult = Characters.filter(character => character.name.toLocaleLowerCase().includes(value));
            console.log(charactersResult);

            setCharacters(charactersResult)
        }else{
            setCharacters([])
        }
    }

    // usar el useEffect, cada vez que la query(q) cambie
    useEffect(() => {
        getCharacters();
    }, [q])

    return (
        <>
            <h1>Search</h1>   
            <form onSubmit={handleSubmit}>
                <label>
                    Buscar
                    <input type="text" onChange={handleChange} value={search} placeholder="Nombre" />
                </label>
                <button className="btn btn-primary">Buscar</button>

                <h3>resultados: {characters.length}</h3>
                {/* Si hay resultados */}
                {characters && 
                <div>
                    <h1>{q}</h1>
                    {characters.map(character => 
                        <Card key={character.id} {...character} />)}
                </div>}

            </form>
        </>
    )
}

export default SearchScreen
