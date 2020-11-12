import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./signup";
import Home from "./home";
import { HOME_PATH, SIGNUP_PATH } from "../path";

function Routes() {
  const checkLoginStatus = () => {
    let keepUser = localStorage.getItem("fb_auth_keep");
    keepUser = keepUser ? JSON.parse(keepUser) : {};
    const isKeepUserValid =
      Object.values(keepUser).filter((d) => d !== "").length === 6;
    return sessionStorage.getItem("fb_auth_login") || isKeepUserValid;
  };

  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path={SIGNUP_PATH}
          render={() => {
            const isLogin = checkLoginStatus();
            if (isLogin) {
              return <Redirect to={HOME_PATH} />;
            }
            return <SignUp />;
          }}
        />
        <Route
          path={HOME_PATH}
          render={() => {
            const isLogin = checkLoginStatus();
            if (isLogin) {
              return <Home />;
            }
            return <Redirect to={SIGNUP_PATH} />;
          }}
        />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
