import React from 'react'

const Login = ({ history }) => {
    const handleLogin = () =>{
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