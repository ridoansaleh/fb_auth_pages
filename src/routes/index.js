import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUp from "./signup";
import Home from "./home";

function Routes() {
  const checkLoginStatus = () => {
    let keepUser = localStorage.getItem("fb_auth_keep");
    keepUser = keepUser ? JSON.parse(keepUser) : {};
    const isKeepUserValid =
      Object.values(keepUser).filter((d) => d !== "").length === 6;
    return sessionStorage.getItem("fb_auth_login") || isKeepUserValid;
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            const isLogin = checkLoginStatus();
            if (isLogin) {
              return <Redirect to="/home" />;
            }
            return <SignUp />;
          }}
        />
        <Route
          path="/home"
          render={() => {
            const isLogin = checkLoginStatus();
            if (isLogin) {
              return <Home />;
            }
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
