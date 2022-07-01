import React,{useContext} from 'react'
import './Phase3.scss'
import {mainContext} from '../../App'

function Phase3 () {
    const{token, update}=useContext(mainContext)
    return (
        <div><h1>Hello from Phase3</h1></div>
    )
};

export default Phase3;