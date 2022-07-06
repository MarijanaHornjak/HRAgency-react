import React, { useState, useContext } from "react";
import Phase1 from "../../components/Phase1/Phase1";
import Phase2 from "../../components/Phase2/Phase2";
import Phase3 from "../../components/Phase3/Phase3";
import { mainContext } from "../../App";
import Header from "../../components/Header/Header";
import "./CreateReportPage.scss";
import { useHistory } from "react-router-dom";

import "./CreateReportPage.scss";

function CreateReportPage() {
  const { token, update } = useContext(mainContext);
  const [phase, setPhase] = useState(1);
  const [report, setReport] = useState({
    candidateId: "",
    candidateName: "",
    companyId: "",
    companyName: "",
    interviewDate: "",
    phase: "",
    status: "",
    note: "",
  });
  const history = useHistory();
  console.log(report);

  const createReport = () => {
    fetch("http://localhost:3333/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((res) => {
        update();
        history.push("/admin/reports/");
      });
  };

  return (
    <div className="CreateReportPage">
      <Header></Header>
      <div className="wrapper">
        <div className="left-wrapper">
          <div className="phase-wrapper">
          <h2
            onClick={() => setPhase(1)}
            className={phase === 1 ? "phase active" : "phase"}
          >
            Select Candidate
          </h2>
          <h2
            onClick={() => setPhase(2)}
            className={phase === 2 ? "phase active" : "phase"}
          >
            Select Company
          </h2>
          <h2
            onClick={() => setPhase(3)}
            className={phase === 3 ? "phase active" : "phase"}
          >
            Fill Report Detail
          </h2>
          </div>
          
        </div>
        <div className="right-wrapper">
          {phase === 1 && <Phase1 report={report} setReport={setReport} />}
          {phase === 2 && <Phase2 report={report} setReport={setReport} />}
          {phase === 3 && <Phase3 report={report} setReport={setReport} />}

          <div className="navigation-buttons">
            {phase >= 2 && (
              <button
                onClick={(e) => {
                  (phase === 2 || phase === 3) && setReport({ ...report });
                  setPhase(phase - 1);
                }}
              >
                Back
              </button>
            )}

            {(phase === 1 || phase === 2) && (
              <button
                onClick={(e) => {
                  (phase === 1 &&
                    report.candidateName !== "" &&
                    setPhase(phase + 1)) ||
                    (phase === 2 &&
                      report.companyName !== "" &&
                      setPhase(phase + 1));
                }}
              >
                Next
              </button>
            )}

            {phase === 3 && (
              <button
                onClick={() => {
                  report.interviewDate !== "" &&
                    report.phase !== "" &&
                    report.status !== "" &&
                    report.note !== "" &&
                    createReport();
                }}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateReportPage;
