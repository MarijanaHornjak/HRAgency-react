import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
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
  const [token, setToken] = useState(1);

  const update = () => {
    setShouldUpdate(!shouldUpdate)
  }

  return (
    <div className="App">

      <mainContext.Provider value={{ candidateList, reportsList, companiesList, token, setToken, update }}>

        {!token && <Switch>
          <Redirect from="/adminpage" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/singlepage/:id" component={SinglePage} />
          <Route path="/loginpage" component={LogInPage} />
        </Switch>
        }
        {token && <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect from="/loginpage" to="/adminpage" />
          <Route path="/adminpage" component={AdminPage}></Route>
          <Route path="/createreportpage" component={CreateReportPage} />
          <Route path="/singlepage/:id" component={SinglePage} />
        </Switch>}

      </mainContext.Provider>


    </div >
  );
}

export default App;
