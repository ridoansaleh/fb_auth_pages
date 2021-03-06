import { useHistory } from "react-router-dom";
import { Container } from "./_homeStyle";
import manIcon from "./assets/user.svg";
import underConstructionPic from "./assets/under-construction.png";
import { HOME_PATH } from "../../path";

function Home() {
  const history = useHistory();

  let user = sessionStorage.getItem("fb_auth_active");
  user = user ? JSON.parse(user) : { firstName: "", lastName: "" };

  const fullname = `${user.firstName}  ${user.lastName}`;

  const handleLogout = () => {
    sessionStorage.removeItem("fb_auth_login");
    sessionStorage.removeItem("fb_auth_active");
    localStorage.removeItem("fb_auth_keep");
    history.replace(HOME_PATH);
  };

  return (
    <Container>
      <div>
        <h4 onClick={handleLogout}>Logout</h4>
        <div>
          <h4>Welcome, {fullname}</h4>
          <img src={manIcon} />
        </div>
      </div>
      <div id="content">
        <img src={underConstructionPic} alt="Under Construction" />
      </div>
    </Container>
  );
}

export default Home;
