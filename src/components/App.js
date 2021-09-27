import {Switch, Route, BrowserRouter} from "react-router-dom"
import history from "../history.js";

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={"/authorization"}>

        </Route>
        <Route exact path={"/"}>

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
