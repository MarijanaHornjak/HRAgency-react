import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { mainContext } from "../../App";

function Header() {
  const { token, setToken } = useContext(mainContext);
  return (
    <div className="Header">
      <Link to="/">HR Agency</Link>
      {token && (
        <div className="button-wrapper">
          <Link to="/admin/reports">Reports</Link>
          <Link to="/admin/createreport">Create Report</Link>
          <button
            onClick={() => {
              setToken("");
              localStorage.clear();
            }}
          >
            Log out
          </button>
        </div>
      )}
      {!token && (
        <div className="button-wrapper">
          <Link to="/">Candidates</Link>
          <Link to="/loginpage">Log in</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
