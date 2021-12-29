import React from 'react'
import { Route } from 'react-router'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({  auth, component: Component, ...rest }) => {
    return <Route {...rest} component={(props) => auth.log ? <Component {...props} /> : <Navigate to="/login" />} />
}

export default PrivateRouter
