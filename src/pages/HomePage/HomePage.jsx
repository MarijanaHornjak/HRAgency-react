import React, { useState, useContext } from "react";
import "./HomePage.scss";
import { mainContext } from "../../App";
import Header from "../../components/Header/Header";
import CandidateCard from "../../components/CandidateCard/CandidateCard";

function HomePage() {
  const { candidateList } = useContext(mainContext);
  const [searchText, setSearchText] = useState("");
  const searchedCandidates = candidateList?.filter((element) =>
    element.name.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(candidateList);
  return (
    <div className="HomePage">
      <Header></Header>
      <div className="wrapper">
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
        <div className="cards">
          {searchedCandidates.map((candidate, index) => (
            <CandidateCard key={index} candidate={candidate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
