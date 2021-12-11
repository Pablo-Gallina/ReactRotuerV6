import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import Spinner from '../components/Spinner/Spinner'
// import { CharacterScreen } from '../Pages/CharacterScreen'
// import MenScreen from '../Pages/MenScreen'
// import SearchScreen from '../Pages/SearchScreen'
// import WomenScreen from '../Pages/WomenScreen'

const CharacterScreen = lazy(() => import("../Pages/CharacterScreen"));
const MenScreen = lazy(() => import("../Pages/MenScreen"));
const SearchScreen = lazy(() => import("../Pages/SearchScreen"));
const WomenScreen = lazy(() => import("../Pages/WomenScreen"))

const LoginRouter = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <Route exact path="/men" component={MenScreen} />
                    <Route exact path="/women" component={WomenScreen} />
                    <Route exact path="/search" component={SearchScreen} />

                    {/* Ruta con parametro (el parametro es id) */}
                    <Route exact path="/character/:id" component={CharacterScreen} />

                    <Redirect to="/men" />
                </Switch>
            </Suspense>
        </>
    )
}

export default LoginRouter