import React, { useEffect, useReducer } from 'react'

import { AuthContext } from './context/AuthContext'
import { AuthReducer } from './reducers/AuthReducer'

import LoginRouter from './routes/LoginRouter'

// Estado inicial
const init = () => {
  return JSON.parse(localStorage.getItem('log')) || {log: false}
}

const App = () => {
  // reducer para el auth
  const [log, dispatch] = useReducer(AuthReducer, {}, init)

  // Lanzar un efecto cada vez que log (el que contola el estado del auth) cambie
  useEffect(() => {
    localStorage.setItem('log', log)
  }, [log])

  return (
    // Compartir el estado en toda la aplicacion
    <AuthContext.Provider value={{ log, dispatch }}>
      <LoginRouter/> { /* Switch con las rutas (Router principal) */ }
    </AuthContext.Provider>
  )
}

export default App

