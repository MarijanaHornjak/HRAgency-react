import React, { useState, useContext } from "react";
import "./LogInPage.scss";
import { mainContext } from "../../App";
import Header from "../../components/Header/Header";

function LogInPage() {
  const { token, setToken } = useContext(mainContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (typeof res === "object") {
          localStorage.setItem("token", res.accessToken);
          setToken(res.accessToken);
        }
      });
  };

  return (
    <div className="LogInPage">
      <Header></Header>
      <div className="wrapper">
        <div className="container">
          <h1>Login form</h1>
          <p>Email address</p>
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="type email"
          />
          <p>Password</p>
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="type password"
          />
          <button onClick={() => logIn()}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
