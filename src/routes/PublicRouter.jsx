import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

// Children es una prop que simpre esta, los hijos de este componente
const PublicRouter = ({ children }) => {
    const { log } = useContext(AuthContext);
    console.log(log.log);

    return !log.log ? children : <Navigate to="/" />
}

export default PublicRouter
