import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import Spinner from '../components/Spinner/Spinner'
import { CharacterScreen } from '../Pages/CharacterScreen'
// import MenScreen from '../Pages/MenScreen'
// import SearchScreen from '../Pages/SearchScreen'
// import WomenScreen from '../Pages/WomenScreen'

// const CharacterScreen = lazy(() => import("../Pages/CharacterScreen"));
const MenScreen = lazy(() => import("../Pages/MenScreen"));
const SearchScreen = lazy(() => import("../Pages/SearchScreen"));
const WomenScreen = lazy(() => import("../Pages/WomenScreen"))

const LoginRouter = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route end path="/men" element={<MenScreen/>} />
                    <Route end path="/women" element={<WomenScreen/>} />
                    <Route end path="/search" element={<SearchScreen/>} />

                    {/* Ruta con parametro (el parametro es id) */}
                    <Route end path="/character/:id" element={<CharacterScreen/>} />

                    <Route path="*" element={<Navigate to="/men" />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default LoginRouter