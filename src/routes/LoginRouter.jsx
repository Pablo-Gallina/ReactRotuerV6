import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AppRouter from './AppRouter'
import Login from '../Pages/LoginScreen'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'


const LoginRouter = () => {
    
    
    return (
        <Router>

            {/* <AppRouter /> */}
            {/* <Route exact path="/login" component={Login} /> */}
            <Routes>
                <Route path="/login" element={
                    <PublicRouter>
                        <Login />
                    </PublicRouter>
                }/>
            </Routes>
           
            {/* <PublicRouter path="/login" auth={log} component={Login} /> */}
            {/* <PrivateRouter path="/" auth={log} component={AppRouter} /> */}
    
        </Router>
    )
}

export default LoginRouter
