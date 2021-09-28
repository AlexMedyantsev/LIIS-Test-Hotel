import React, {useState, useEffect} from "react"
import {Switch, Route, BrowserRouter} from "react-router-dom"
import history from "../history.js";
import AuthPage from "./AuthPage"
import MainPage from "./MainPage"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const counter = useSelector((state) => state.counter)

  useEffect(() => {
    history.push('/auth')
  }, [isAuthenticated]);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(window.localStorage.getItem('isAuthenticated')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated])

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={"/auth"}>
          <AuthPage />
        </Route>
        <Route exact path={"/"}>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
