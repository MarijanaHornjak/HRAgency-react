import React, {useState, useContext} from 'react'
import './LogInPage.scss'
import {mainContext} from '../../App'

function LogInPage () {
    const {token, setToken} = useContext(mainContext)
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    return (
        <div><h1>Hello from LogInPage</h1></div>
    )
};

export default LogInPage;