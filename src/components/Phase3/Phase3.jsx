import React, { useContext } from "react";
import "./Phase3.scss";
import { mainContext } from "../../App";
import moment from "moment";

function Phase3(props) {
  const { token, update } = useContext(mainContext);
  const todaysDate = moment().format("YYYY-MM-DD");

  return (
    <div className="Phase3">
      <p>Interview Date</p>
      <input
        type="date"
        value={props.report.interviewDate}
        max={todaysDate}
        onInput={(e) =>
          props.setReport({ ...props.report, interviewDate: e.target.value })
        }
      ></input>
      <p>Phase</p>
      <select
        value={props.report.phase}
        onInput={(e) =>
          props.setReport({ ...props.report, phase: e.target.value })
        }
      >
        <option value="cv">CV</option>
        <option value="hr">HR</option>
        <option value="tech">TECHNICAL</option>
        <option value="final">FINAL</option>
      </select>
      <p>Status</p>
      <select
        value={props.report.status}
        onInput={(e) =>
          props.setReport({ ...props.report, status: e.target.value })
        }
      >
        <option value="passed">PASSED</option>
        <option value="declined">DECLINED</option>
      </select>
      <p>Note</p>
      <textarea
        name="message"
        rows="10"
        cols="100"
        value={props.report.note}
        onChange={(e) =>
          props.setReport({ ...props.report, note: e.target.value })
        }
      ></textarea>
    </div>
  );
}

export default Phase3;
