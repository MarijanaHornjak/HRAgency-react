import React from 'react'
import './Modal.scss'
import moment from 'moment';

function Modal ({singleReport, toggleModal}) {
    return (
        <div className="Modal">
            <div className="modal-details">
                <div className='modal-upper-part'>
                 <h1>{singleReport.candidateName}</h1>
                 <button onClick={()=>toggleModal()}>X</button>
                </div>
                <div className='modal-lower-part'>
                    <div className='lower-left-part'>
                        <div className="detail">
                            <p>Company</p>
                            <h3>{singleReport.companyName}</h3>
                            </div>
                            <div className="detail">
                            <p>Interview Date</p>
                            <h3>{moment(singleReport.interviewDate).format("DD.MM.YYYY.")}</h3>
                            </div>
                            <div className="detail">
                            <p>Phase</p>
                            <h3>{singleReport.phase}</h3>
                            </div>
                            <div className="detail">
                            <p>Status</p>
                            <h3>{singleReport.status}</h3>
                            </div>
                    </div>
                    <div className='lower-right-part'>
                        <p>Notes</p>
                        <p>{singleReport.note}</p>

                    </div>

                </div>
               

            </div>

        </div>
    )
};

export default Modal;