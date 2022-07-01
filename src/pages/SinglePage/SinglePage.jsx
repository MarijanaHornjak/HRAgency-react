import React, {useState, useContext} from 'react'
import './SinglePage.scss'
import {mainContext} from '../../App'

function SinglePage() {
   const [modal, setModal]=useState(false)
   const {candidateList, companiesList} = useContext(mainContext)

    return (
        <div><h1>Hello from SinglePage</h1></div>
    )
};

export default SinglePage;