import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/authTypes';

const Login = () => {
    // Usando el dispatch del auth context
    const { dispatch } = useContext(AuthContext);
    
    const history = useHistory();
    const handleLogin = () =>{
        // Disparando la accion login
        dispatch({ type: authTypes.login })
        history.push("/men");
    }
    return (
        <>
            <h1>Login</h1>   
            <button type="button" className="btn btn-outline-success d-flex" onClick={handleLogin}>LogOut</button>
        </>
    )
}

export default Login