import React,{useContext, useState} from 'react'
import './Phase2.scss'
import {mainContext} from '../../App'

function Phase2 (props) {
    const{companiesList}=useContext(mainContext)
    const[searchText, setSearchText]=useState("")
    const[selectedCompany, setSelectedCompany]=useState(null)
    
    const searchedCompanies=companiesList?.filter((e)=>e.name.toLowerCase().includes(searchText.toLowerCase()))
    
    return (
        <div className="Phase2">
            <input type="text" value={searchText} onChange={(e)=> setSearchText(e.target.value)}></input>
            <div className='companies'>
                {searchedCompanies?.map((e,index) => <div className={e.id === props.report.companyId ? 'company active' : 'company'}
                onClick={()=>{
                    props.setReport({...props.report, companyId: e.id, companyName: e.name})
                }}>
                {e.name}
                </div>)}
            </div>
        </div>
    )
};

export default Phase2;