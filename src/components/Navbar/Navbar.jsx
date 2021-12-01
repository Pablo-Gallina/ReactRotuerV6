import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const Navbar = () => {
    const history = useHistory()
    const handleLogOut = ()=> {
        //Nos reireccionara al login (url += "/login")
        history.replace("/login");
    }
    
    return (
        <>
            <ul className="nav justify-content-start me-auto">
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
            <button type="button" className="btn btn-outline-danger d-flex" onClick={handleLogOut}>LogOut</button>
        </>
    )
}

export default Navbar
