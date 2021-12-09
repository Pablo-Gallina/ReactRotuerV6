import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

import AppRouter from './AppRouter'
import Login from '../Pages/LoginScreen'


const LoginRouter = () => {
    const { log } = useContext(AuthContext);
    
    return (
        <Router>

            <AppRouter />

            <Switch>
                <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default LoginRouter
