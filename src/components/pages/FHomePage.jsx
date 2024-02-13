import React from 'react'
import { useHistory } from 'react-router-dom';

const FHomePage = () => {
    const history  = useHistory();

    const handleRegister = () => {
        history.push('/Registr')
    }

    const handleLogin = () => {
        history.push('/Login')
    }
  return (
    <div>
    <h1>This is the very First page of the site. <br /> Main Page</h1>
    <button onClick={handleRegister}>Register</button>
    <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default FHomePage