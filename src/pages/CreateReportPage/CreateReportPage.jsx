import React, {useState, useContext} from 'react'
import Phase1 from '../../components/Phase1/Phase1'
import Phase2 from '../../components/Phase2/Phase2'
import Phase3 from '../../components/Phase3/Phase3'
import {mainContext} from '../../App'


import './CreateReportPage.scss'

function CreateReportPage () {
    const {token, update}= useContext(mainContext)
    const [report, setReport]= useState({})
    return (
        <div>
            <Phase1/>
            <Phase2/>
            <Phase3/>

        </div>
    )
};

export default CreateReportPage;