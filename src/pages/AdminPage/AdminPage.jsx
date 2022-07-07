import React, { useState, useContext } from "react";
import "./AdminPage.scss";
import { mainContext } from "../../App";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import moment from "moment";

function AdminPage() {
  const { reportsList, token, update,theme } = useContext(mainContext);
  const [searchText, setSearchText] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(0);
  const searchedReports = reportsList?.filter(
    (e, i) =>
      e.candidateName.toLowerCase().includes(searchText.toLowerCase()) ||
      e.companyName.toLowerCase().includes(searchText.toLowerCase())
  );
  const singleReport =
    reportsList && reportsList.find((e) => e.id === selectedReport);
  const toggleModal = () => {
    setModal(!modal);
  };
  const deleteReport = (id) => {
    fetch(`http://localhost:3333/api/reports/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => update());
  };

  // console.log(selectedReport);
  return (
    <div className={theme ?"AdminPage": "AdminPage dark"}>
      <Header></Header>
      <div className="wrapper">
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
        <div className="reports">
          {searchedReports.map((e, i) => {
            return (
              <div className="singleReport">
                <div className="detail">
                  {e.companyName}
                  <p>Company</p>
                </div>
                <div className="detail">
                  {e.candidateName}
                  <p>Candidate</p>
                </div>
                <div className="detail">
                  {moment(e.interviewDate).format("DD.MM.YYYY.")}
                  <p>Interview Date</p>
                </div>
                <div className="detail">
                  {e.status}
                  <p>Status</p>
                </div>
                <button
                  onClick={() => {
                    setModal(!modal);
                    setSelectedReport(e.id);
                  }}
                >
                  Details
                </button>
                <button
                  onClick={() => {
                    deleteReport(e.id);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {modal && (
        <Modal singleReport={singleReport} toggleModal={toggleModal}></Modal>
      )}
    </div>
  );
}

export default AdminPage;
