import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./signup";
import LogIn from "./login";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
