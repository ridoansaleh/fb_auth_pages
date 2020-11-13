import { useState, useEffect } from "react";
import { Wrapper } from "./styles/_contentStyle";
import { encryptText } from "../../crypto";
import { MONTH, DAY, YEAR } from "./constant";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function Content() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [reEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState({
    month: "",
    day: "",
    year: "",
  });
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [infoSubmission, setInfoSubmission] = useState("");

  const isFirstnameError = isFormSubmitted && !firstName;
  const isLastnameError = isFormSubmitted && !lastName;
  const isEmailError = isFormSubmitted && !EMAIL_REGEX.test(email);
  const isReEmailError = !isEmailError
    ? isFormSubmitted && reEmail !== email
    : false;
  const isPasswordError = isFormSubmitted && password.length < 8;
  const isGenderError = isFormSubmitted && !gender;
  const isBirthdateError =
    isFormSubmitted &&
    Object.values(birthdate).filter((d) => d !== "").length < 3;

  useEffect(() => {
    if (infoSubmission) {
      setTimeout(() => {
        setInfoSubmission("");
      }, 2500);
    }
  }, [infoSubmission]);

  const handleSignUp = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (
      firstName &&
      lastName &&
      EMAIL_REGEX.test(email) &&
      reEmail === email &&
      password.length >= 8 &&
      gender &&
      Object.values(birthdate).filter((d) => d !== "").length === 3
    ) {
      let userTable = localStorage.getItem("fb_auth_user");
      userTable = userTable ? JSON.parse(userTable) : null;

      if (userTable) {
        let isEmailExist = userTable.find((d) => d.email === email);

        if (isEmailExist) {
          setInfoSubmission(
            "The email you entered has been used in another account"
          );
          return;
        }

        setInfoSubmission("");

        userTable.push({
          firstName,
          lastName,
          email: encryptText(email),
          password: encryptText(password),
          gender,
          birthdate,
        });
      } else {
        userTable = [
          {
            firstName,
            lastName,
            email: encryptText(email),
            password: encryptText(password),
            gender,
            birthdate,
          },
        ];
      }

      localStorage.setItem("fb_auth_user", JSON.stringify(userTable));

      setFirstName("");
      setLastName("");
      setEmail("");
      setReEmail("");
      setPassword("");
      setGender("");
      setBirthdate({
        month: "",
        day: "",
        year: "",
      });

      setFormSubmitted(false);
      setInfoSubmission(
        "You've successfully signup. Please login with your account!"
      );
    }
  };

  return (
    <Wrapper>
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
        <form noValidate autoComplete="off" onSubmit={handleSignUp}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="first_name">First Name: </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    className={isFirstnameError ? `error` : ``}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </td>
              </tr>
              {isFirstnameError && (
                <tr>
                  <td></td>
                  <td>
                    <div className="error-msg">
                      Please input a valid Firstname
                    </div>
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <label htmlFor="last_name">Last Name: </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className={isLastnameError ? `error` : ``}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </td>
              </tr>
              {isLastnameError && (
                <tr>
                  <td></td>
                  <td>
                    <div className="error-msg">
                      Please input a valid Lastname
                    </div>
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <label htmlFor="email">Your Email: </label>
                </td>
                <td>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={isEmailError ? `error` : ``}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              {isEmailError && (
                <tr>
                  <td></td>
                  <td>
                    <div className="error-msg">Please input a valid Email</div>
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <label htmlFor="re_email">Re-enter Email: </label>
                </td>
                <td>
                  <input
                    type="email"
                    id="re_email"
                    name="re_email"
                    className={isReEmailError ? `error` : ``}
                    value={reEmail}
                    onChange={(e) => setReEmail(e.target.value)}
                  />
                </td>
              </tr>
              {isReEmailError && (
                <tr>
                  <td></td>
                  <td>
                    <div className="error-msg">Email is not matched</div>
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <label htmlFor="password">New Password: </label>
                </td>
                <td>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={isPasswordError ? `error` : ``}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
              {isPasswordError && (
                <tr>
                  <td></td>
                  <td>
                    <div className="error-msg">
                      Please input a valid Password (min. 8 chars)
                    </div>
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <label htmlFor="gender">I am: </label>
                </td>
                <td>
                  <select
                    name="gender"
                    id="gender"
                    className={isGenderError ? `error` : ``}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </td>
              </tr>
              {isGenderError && (
                <tr>
                  <td></td>
                  <td>
                    <div className="error-msg">
                      Please select a valid Gender
                    </div>
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <label htmlFor="birthday">Birthday: </label>
                </td>
                <td id="birthday_wrapper">
                  <select
                    name="month"
                    id="birthday"
                    className={isBirthdateError ? `error` : ``}
                    value={birthdate.month}
                    onChange={(e) =>
                      setBirthdate({ ...birthdate, month: e.target.value })
                    }
                  >
                    <option id="default" value="">
                      Month:
                    </option>
                    {MONTH.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <select
                    name="day"
                    id="birthday"
                    className={isBirthdateError ? `error` : ``}
                    value={birthdate.day}
                    onChange={(e) =>
                      setBirthdate({ ...birthdate, day: e.target.value })
                    }
                  >
                    <option id="default" value="">
                      Day:
                    </option>
                    {DAY.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <select
                    name="year"
                    id="birthday"
                    className={isBirthdateError ? `error` : ``}
                    value={birthdate.year}
                    onChange={(e) =>
                      setBirthdate({ ...birthdate, year: e.target.value })
                    }
                  >
                    <option id="default" value="">
                      Year:
                    </option>
                    {YEAR.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              {isBirthdateError && (
                <tr>
                  <td></td>
                  <td>
                    <div className="error-msg">
                      Please select a valid Birthdate
                    </div>
                  </td>
                </tr>
              )}
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
            </tbody>
          </table>
          {infoSubmission && (
            <div className="error-submission">{infoSubmission}</div>
          )}
        </form>
        <hr />
        <p id="create-page">
          <a href="#">Create a Page</a> for a celebrity, band or business.
        </p>
      </div>
    </Wrapper>
  );
}

export default Content;
