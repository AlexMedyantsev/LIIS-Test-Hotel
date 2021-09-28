import React, {useEffect} from "react"
import {useSelector} from 'react-redux'
import {Switch, Route, Router} from "react-router-dom"
import history from "../history.js";
import AuthPage from "./AuthPage"
import MainPage from "./MainPage"

function App() {

  const isAuthentificated = useSelector((state) => state.USER.isAuthentificated)
  console.log('isAuthenticated - ' + isAuthentificated)

  useEffect(() => {
    if (isAuthentificated) {
      history.push('/main')
    } else {
      history.push('/auth')
    }
  }, [isAuthentificated]);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/auth"} component={AuthPage} />
        <Route exact path={"/main"} component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
