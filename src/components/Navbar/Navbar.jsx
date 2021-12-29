import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { authTypes } from '../../types/authTypes';

const Navbar = () => {
    const navigate = useNavigate()

    const { dispatch } = useContext(AuthContext);

    const handleLogOut = ()=> {
        dispatch({ type: authTypes.logout })
        //Nos reireccionara al login (url += "/login")
        navigate("/login");
    }
    
    return (
        <>
            <ul className="nav justify-content-start me-auto">
                <li className="nav-item">
                    <NavLink className={({isActive})=> `nav-link ${isActive ? 'active text-dark' : ''}`} to="/men">men</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({isActive})=> `nav-link ${isActive ? 'active text-dark' : ''}`} to="/women">women</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({isActive})=> `nav-link ${isActive ? 'active text-dark' : ''}`} to="/search">Search</NavLink>
                </li>
            </ul>
            <button type="button" className="btn btn-outline-danger d-flex" onClick={handleLogOut}>LogOut</button>
        </>
    )
}

export default Navbar
