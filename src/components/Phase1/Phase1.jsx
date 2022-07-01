import React,{useContext} from 'react'
import './Phase1.scss'
import {mainContext} from '../../App'


function Phase1 () {

    const{candidateList}=useContext(mainContext)
    return (
        <div><h1>Hello from Phase1</h1></div>
    )
};

export default Phase1;