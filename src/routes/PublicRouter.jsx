import React from 'react'
import { Router } from 'react-router'

const PublicRouter = ({ component: Component }) => {
    return <Router component={<Component />}/>
}

export default PublicRouter
