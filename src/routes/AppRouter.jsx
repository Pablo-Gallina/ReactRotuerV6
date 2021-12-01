import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import MenScreen from '../Pages/MenScreen'
import SearchScreen from '../Pages/SearchScreen'
import WomenScreen from '../Pages/WomenScreen'



const LoginRouter = () => {
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/men" component={MenScreen} />
            <Route exact path="/women" component={WomenScreen} />
            <Route exact path="/search" component={SearchScreen} />

            {/* <Redirect to="/men" /> */}
        </Switch>
        </>
    )
}

export default LoginRouter