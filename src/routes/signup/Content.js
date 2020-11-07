import { useState, useEffect } from "react";
import { Wrapper } from "./_contentStyle";
import { MONTH, DAY, YEAR } from "./constant";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function Content(props) {
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
  const [isFormSubmit, setFormSubmit] = useState(false);
  const [infoSubmission, setInfoSubmission] = useState("");

  const isFirstnameError = isFormSubmit && !firstName;
  const isLastnameError = isFormSubmit && !lastName;
  const isEmailError = isFormSubmit && !EMAIL_REGEX.test(email);
  const isReEmailError = !isEmailError
    ? isFormSubmit && reEmail !== email
    : false;
  const isPasswordError = isFormSubmit && password.length < 8;
  const isGenderError = isFormSubmit && !gender;
  const isBirthdateError =
    isFormSubmit && Object.values(birthdate).filter((d) => d !== "").length < 3;

  useEffect(() => {
    if (infoSubmission) {
      setTimeout(() => {
        setInfoSubmission("");
      }, 2500);
    }
  }, [infoSubmission]);

  const handleSignUp = (e) => {
    e.preventDefault();
    setFormSubmit(true);
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
          email,
          password,
          gender,
          birthdate,
        });
      } else {
        userTable = [
          {
            firstName,
            lastName,
            email,
            password,
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

      setFormSubmit(false);
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
        <form noValidate onSubmit={handleSignUp}>
          <table>
            <tr>
              <td>
                <label for="first_name">First Name: </label>
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
                <label for="last_name">Last Name: </label>
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
                  <div className="error-msg">Please input a valid Lastname</div>
                </td>
              </tr>
            )}
            <tr>
              <td>
                <label for="email">Your Email: </label>
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
                <label for="re_email">Re-enter Email: </label>
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
                <label for="password">New Password: </label>
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
                <label for="gender">I am: </label>
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
                  <div className="error-msg">Please select a valid Gender</div>
                </td>
              </tr>
            )}
            <tr>
              <td>
                <label for="birthday">Birthday: </label>
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
                    <option id={d} value={d}>
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
                    <option value={d}>{d}</option>
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
                    <option value={d}>{d}</option>
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
