import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

import AppRouter from './AppRouter'
import Login from '../Pages/LoginScreen'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'


const LoginRouter = () => {
    const { log } = useContext(AuthContext);
    
    return (
        <Router>

            {/* <AppRouter /> */}
            {/* <Route exact path="/login" component={Login} /> */}

            <Switch>
                <PublicRouter path="/login" auth={log} component={Login} />
                <PrivateRouter path="/" auth={log} component={AppRouter} />
            </Switch>
        </Router>
    )
}

export default LoginRouter
