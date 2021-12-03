import React, { useState } from 'react'

const SearchScreen = ({history}) => {
    const [search, setSearch] = useState("")
    const handleChange = (e)=>{
        const value = e.target.value;
        setSearch(value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        //Agregar un query param al path (para realizar la busqueda)
        history.push(`?q=${search}`)
    }
    return (
        <>
            <h1>Search</h1>   
            <form onSubmit={handleSubmit}>
                <label>
                    Buscar
                    <input type="text" onChange={handleChange} value={search} placeholder="Nombre" />
                </label>
                <button className="btn btn-primary">Buscar</button>
            </form>
        </>
    )
}

export default SearchScreen
