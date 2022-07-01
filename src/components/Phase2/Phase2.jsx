import React,{useContext} from 'react'
import './Phase2.scss'
import {mainContext} from '../../App'

function Phase2 () {
    const{companiesList}=useContext(mainContext)
    return (
        <div><h1>Hello from Phase2</h1></div>
    )
};

export default Phase2;