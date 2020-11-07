import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./signup";
import Home from "./home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
