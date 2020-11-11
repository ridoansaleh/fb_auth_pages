import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Wrapper } from "./styles/_headerStyle";

function Header() {
  const [email, setEmail] = useState("");
  const [isEmailError, setEmailError] = useState(false);
  const [isKeepLogin, setKeepLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordError, setPasswordError] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    let userTable = localStorage.getItem("fb_auth_user");
    userTable = userTable ? JSON.parse(userTable) : [];

    const isCredentialsMatched = userTable.find(
      (d) => d.email === email && d.password === password
    );

    if (isCredentialsMatched) {
      if (isKeepLogin) {
        localStorage.setItem(
          "fb_auth_keep",
          JSON.stringify(isCredentialsMatched)
        );
      }
      sessionStorage.setItem("fb_auth_login", "!@#$");
      sessionStorage.setItem(
        "fb_auth_active",
        JSON.stringify(isCredentialsMatched)
      );
      setFormSubmitted(false);
      history.replace("/home");
    } else {
      setEmailError(true);
      setPasswordError(true);
    }
  };

  useEffect(() => {
    setEmailError(isFormSubmitted && !email);
  }, [isFormSubmitted, email]);

  useEffect(() => {
    setPasswordError(isFormSubmitted && !password);
  }, [password, isFormSubmitted]);

  return (
    <Wrapper>
      <h1>facebook</h1>
      <form noValidate onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={isEmailError ? `error` : ``}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <input
              type="checkbox"
              id="keep_login"
              name="keep_login"
              checked={isKeepLogin}
              onChange={(e) => setKeepLogin(e.target.checked)}
            />
            <label htmlFor="keep_login"> Keep me logged in</label>
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className={isPasswordError ? `error` : ``}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#">Forgot your password?</a>
        </div>
        <input type="submit" value="Login" />
      </form>
    </Wrapper>
  );
}

export default Header;
