import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Wrapper } from "./_headerStyle";

function Header(props) {
  const [email, setEmail] = useState("");
  const [isEmailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordError, setPasswordError] = useState(false);
  const [isFormSubmit, setFormSubmit] = useState(false);

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    setFormSubmit(true);
    console.log("Login ...");

    let userTable = localStorage.getItem("fb_auth_user");
    userTable = userTable ? JSON.parse(userTable) : [];

    const isCredentialsMatched = userTable.find(
      (d) => d.email === email && d.password === password
    );

    if (isCredentialsMatched) {
      sessionStorage.setItem("fb_auth_login", "!@#$");
      sessionStorage.setItem(
        "fb_auth_active",
        JSON.stringify(isCredentialsMatched)
      );
      setFormSubmit(false);
      history.push("/home");
    } else {
      setEmailError(true);
      setPasswordError(true);
    }
  };

  useEffect(() => {
    setEmailError(isFormSubmit && !email);
  }, [isFormSubmit, email]);

  useEffect(() => {
    setPasswordError(isFormSubmit && !password);
  }, [password, isFormSubmit]);

  return (
    <Wrapper>
      <h1>facebook</h1>
      <form noValidate onSubmit={handleLogin}>
        <div>
          <label for="email">Email</label>
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
              value="keep_me_login"
            />
            <label for="keep_login"> Keep me logged in</label>
          </div>
        </div>
        <div>
          <label for="password">Password</label>
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
