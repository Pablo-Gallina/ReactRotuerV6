import React from 'react'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'

const PublicRouter = ({  auth, component: Component, ...rest }) => {
    return <Route {...rest} component={(props) => !auth.log ? <Component {...props}/> : <Redirect to="/" />} />
}

export default PublicRouter
