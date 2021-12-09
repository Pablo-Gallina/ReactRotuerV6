import React from 'react'
import { Router } from 'react-router'

const PrivateRouter = ({ component: Component }) => {
    return (
        <Router component={<Component />}/>
    )
}

export default PrivateRouter
