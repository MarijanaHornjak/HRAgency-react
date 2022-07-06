import React,{useContext, useState} from 'react'
import './Phase1.scss'
import {mainContext} from '../../App'


function Phase1 (props) {

    const{candidateList}=useContext(mainContext)
    const [searchText, setSearchText]=useState("")
    const [selectedCandidate, setSelectedCandidate]= useState(null)

    const searchedCandidates=candidateList?.filter(e=>e.name.toLowerCase().includes(searchText.toLowerCase()))

   
    return (
        <div className="Phase1">
            <input type="text" values={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            <div className="candidates">
                {searchedCandidates?.map((e, index) => <div className={e.id === props.report.candidateId ? 'candidate active' : 'candidate'}   
                    onClick={() => {
                        setSelectedCandidate(e)                                                               
                        props.setReport({ ...props.report, candidateId: e.id, candidateName: e.name })
                    }}>
                    <img src="https://www.svgrepo.com/show/5125/avatar.svg" height="100px" alt="photo" />
                    <h4>{e.name}</h4>
                    <h5>{e.email}</h5>
                </div>)}
            </div>
        </div>
    )
};

export default Phase1;