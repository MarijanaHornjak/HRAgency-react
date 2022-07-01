import React, {useState, useContext} from 'react'
import './HomePage.scss'
import {mainContext} from '../../App'


function HomePage () {
    const {candidateList} = useContext(mainContext)
    const [searchText, setSearchText]= useState("")
    return (
        <div><h1>Hello from HomePage</h1></div>
    )
};

export default HomePage;