import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink activeClassName="active text-dark" className="nav-link" to="/men">men</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active text-dark" className="nav-link" to="/women">women</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active text-dark" className="nav-link" to="/search">Search</NavLink>
                </li>
            </ul>  
        </>
    )
}

export default Navbar
