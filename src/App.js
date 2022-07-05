import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.scss'
import AdminPage from './pages/AdminPage/AdminPage';
import CreateReportPage from './pages/CreateReportPage/CreateReportPage';
import HomePage from './pages/HomePage/HomePage';
import LogInPage from './pages/LogInPage/LogInPage';
import SinglePage from './pages/SinglePage/SinglePage';
export const mainContext = React.createContext()





function App() {
  const [candidateList, setCandidateList] = useState([]);
  const [reportsList, setReportsList] = useState([]);
  const [companiesList, setCompaniesList] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const update = () => {
    setShouldUpdate(!shouldUpdate)
  }
  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then(res => res.json())
      .then(res => setCandidateList(res))

    fetch("http://localhost:3333/api/companies")
      .then(res => res.json())
      .then(res => setCompaniesList(res))

    fetch("http://localhost:3333/api/reports")
      .then(res => res.json())
      .then(res => setReportsList(res))
  }, [shouldUpdate])


  return (
    <div className="App">

      <mainContext.Provider value={{ candidateList, reportsList, companiesList, token, setToken, update }}>

        {!token && <Switch>
          <Redirect from="/admin" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/candidate/:id" component={SinglePage} />
          <Route path="/loginpage" component={LogInPage} />
        </Switch>
        }
        {token && <Switch>
          <Redirect from="/loginpage" to="/admin/reports" />
          <Route exact path="/" component={HomePage} />
          <Route path="/admin/reports" component={AdminPage}></Route>
          <Route path="/admin/createreport" component={CreateReportPage} />
          <Route path="/candidate/:id" component={SinglePage} />
        </Switch>}

      </mainContext.Provider>


    </div >
  );
}

export default App;
