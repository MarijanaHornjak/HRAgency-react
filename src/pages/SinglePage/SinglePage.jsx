import React, { useState, useContext } from "react";
import "./SinglePage.scss";
import { mainContext } from "../../App";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import { useParams } from "react-router-dom";
import moment from "moment";

function SinglePage(props) {
  const [modal, setModal] = useState(false);
  const { candidateList, reportsList, theme } = useContext(mainContext);
  const { id } = useParams();
  const [selectedReport, setSelectedReport] = useState(0);

  const candidate =
    candidateList && candidateList.find((e) => e.id === parseInt(id));
  const filteredReports =
    reportsList && reportsList.filter((e) => e.candidateId === parseInt(id));
  const singleReport = filteredReports?.find((e) => e.id === selectedReport);
  console.log(singleReport);

  console.log(selectedReport);
  console.log(reportsList);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="SinglePage">
      <Header></Header>
      <div className={theme ? "wrapper" : "wrapper dark"}>
        <div className="top-wrapper">
          <img
            src="https://www.svgrepo.com/show/5125/avatar.svg"
            alt="image"
          ></img>
          <div className="details-wrapper">
            <p>Name</p>
            <h2>{candidate && candidate.name}</h2>
            <p>Email</p>
            <h2>{candidate && candidate.email}</h2>
            <p>Date of birth</p>
            <h2>
              {candidate && moment(candidate.birthday).format("DD.MM.YYYY.")}
            </h2>
            <p>Education</p>
            <h2>{candidate && candidate.education}</h2>
          </div>
        </div>
        <h1 className="heading">Reports</h1>
        <div className="bottom-wrapper">
          <div className="titles">
            <h4>Company</h4>
            <h4>Interview Date</h4>
            <h4>Status</h4>
          </div>
          <div className="reports">
            {filteredReports.length > 0 ? (
              <>
                {filteredReports.map((e, i) => {
                  return (
                    <div className="report" key={i}>
                      <div>{e.companyName}</div>
                      <div>{moment(e.interviewDate).format("DD.MM.YYYY.")}</div>
                      <div>
                        <p>{e.status}</p>
                        <button
                          onClick={() => {
                            setModal(!modal);
                            setSelectedReport(e.id);
                          }}
                        >
                          Info
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <h3>There is no Reports yet.</h3>
            )}
          </div>
        </div>
      </div>
      {modal && (
        <Modal singleReport={singleReport} toggleModal={toggleModal}></Modal>
      )}
    </div>
  );
}

export default SinglePage;
