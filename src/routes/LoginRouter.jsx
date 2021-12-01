import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../Pages/LoginScreen'
import AppRouter from './AppRouter'


const LoginRouter = () => {
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
