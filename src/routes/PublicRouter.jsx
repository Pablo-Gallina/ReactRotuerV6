import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

// Children es una prop que simpre esta, los hijos de este componente
const PublicRouter = ({ children }) => {
    const { log } = useContext(AuthContext);
    console.log(log.log);

    // Sino esta logueado
    if (!log.log) {
        // Pantalla de login
        return children
    }else{
        // Esta logueado
        return <Navigate to="/" />
    }
}

export default PublicRouter
