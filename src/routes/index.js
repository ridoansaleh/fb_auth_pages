import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUp from "./signup";
import Home from "./home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => {
            const isLogin = sessionStorage.getItem("fb_auth_login");
            if (isLogin) {
              return <Redirect to="/home" />;
            }
            return <SignUp {...routeProps} />;
          }}
        />
        <Route
          path="/home"
          render={(routeProps) => {
            const isLogin = sessionStorage.getItem("fb_auth_login");
            if (isLogin) {
              return <Home {...routeProps} />;
            }
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
