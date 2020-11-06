import { Container, LoginHeader, SignUpContent, Footer } from "./_signupStyle";
import { MONTH, DAY, YEAR } from "./constant";

function SignUp() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login ...");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("SignUp ...");
  };

  return (
    <Container>
      <LoginHeader>
        <h1>facebook</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
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
            />
            <a href="#">Forgot your password?</a>
          </div>
          <input type="submit" value="Login" />
        </form>
      </LoginHeader>
      <SignUpContent>
        <div>
          <h2>
            Facebook helps you connect and share with the people in your life.
          </h2>
          <div id="globe_icon"></div>
        </div>
        <div>
          <h2>Sign Up</h2>
          <p id="title-desc">It's free and always will be.</p>
          <hr />
          <form onSubmit={handleSignUp}>
            <table>
              <tr>
                <td>
                  <label for="first_name">First Name: </label>
                </td>
                <td>
                  <input type="text" id="first_name" name="first_name" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="last_name">Last Name: </label>
                </td>
                <td>
                  <input type="text" id="last_name" name="last_name" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="email">Your Email: </label>
                </td>
                <td>
                  <input type="email" id="email" name="email" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="re_email">Re-enter Email: </label>
                </td>
                <td>
                  <input type="email" id="re_email" name="re_email" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="password">New Password: </label>
                </td>
                <td>
                  <input type="password" id="password" name="password" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="gender">I am: </label>
                </td>
                <td>
                  <select name="gender" id="gender">
                    <option value="">Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="birthday">Birthday: </label>
                </td>
                <td id="birthday_wrapper">
                  <select name="month" id="birthday">
                    <option id="default" value="">
                      Month:
                    </option>
                    {MONTH.map((d) => (
                      <option id={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <select name="day" id="birthday">
                    <option id="default" value="">
                      Day:
                    </option>
                    {DAY.map((d) => (
                      <option value={d}>{d}</option>
                    ))}
                  </select>
                  <select name="year" id="birthday">
                    <option id="default" value="">
                      Year:
                    </option>
                    {YEAR.map((d) => (
                      <option value={d}>{d}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <a href="#">Why do i need to provide my birthday?</a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" value="Sign Up" />
                </td>
              </tr>
            </table>
          </form>
          <hr />
          <p id="create-page">
            <a href="#">Create a Page</a> for a celebrity, band or business.
          </p>
        </div>
      </SignUpContent>
      <Footer>
        <ul id="language">
          <li>
            <a href="#">English (US)</a>
          </li>
          <li>
            <a href="#">Espanol</a>
          </li>
          <li>
            <a href="#">Portugues (Brasil)</a>
          </li>
          <li>
            <a href="#">Francais (France)</a>
          </li>
          <li>
            <a href="#">Deutsch</a>
          </li>
          <li>
            <a href="#">Italiano</a>
          </li>
          <li>
            <a href="#">عرب</a>
          </li>
          <li>
            <a href="#">भारत</a>
          </li>
          <li>
            <a href="#">中国</a>
          </li>
          <li>
            <a href="#">日本</a>
          </li>
        </ul>
        <hr />
        <div>
          <div>
            <ul>
              <li>Facebook &#64; 2011</li>
              <li>
                <a href="#">English (US)</a>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Find Friends</a>
            </li>
            <li>
              <a href="#">Badges</a>
            </li>
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Create a Page</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </Footer>
    </Container>
  );
}

export default SignUp;
