import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { mainContext } from "../../App";

function Header() {
  const { token, setToken, theme, toggleTheme } = useContext(mainContext);
  console.log(theme);
  return (
    <div className={theme ? "Header" : "Header dark"}>
      <Link to="/" id="logo">
        HЯ Agency
      </Link>
      {token && (
        <div className="button-wrapper">
          <Link to="/admin/reports">Reports</Link>
          <Link to="/admin/createreport">Create Report</Link>
          <button onClick={() => toggleTheme()}>Change Theme</button>
          <button
            id="logout-login"
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
          <button onClick={() => toggleTheme()}>Change Theme</button>
          <Link to="/loginpage">Log in</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
