import React from "react";
import { Link } from "react-router-dom";
import "./CandidateCard.scss";

function CandidateCard(props) {
  return (
    <Link to={`/candidate/${props.candidate.id}`}>
      <img
        src="https://www.svgrepo.com/show/5125/avatar.svg"
        height="200px"
      ></img>
      <h3>{props.candidate.name}</h3>
      <p>{props.candidate.email}</p>
    </Link>
  );
}

export default CandidateCard;
