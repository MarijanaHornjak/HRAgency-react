import React,{useState, useContext} from 'react'
import './AdminPage.scss'
import {mainContext} from '../../App'

function AdminPage () {

    const {reportsList, token, update}= useContext(mainContext)
    const [ searchText, setSearchText]= useState("")
    const [modal, setModal]=useState(false)

    return (
        <div><h1>Hello from AdminPage</h1></div>
    )
};

export default AdminPage;