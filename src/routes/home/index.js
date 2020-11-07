import { useHistory } from "react-router-dom";
import { Container } from "./_homeStyle";

function Home(props) {
  const history = useHistory();

  let user = sessionStorage.getItem("fb_auth_active");
  user = user ? JSON.parse(user) : { firstName: "", lastName: "" };

  const fullname = `${user.firstName}  ${user.lastName}`;

  const handleLogout = () => {
    sessionStorage.removeItem("fb_auth_login");
    sessionStorage.removeItem("fb_auth_active");
    history.push("/");
  };

  return (
    <Container>
      <div>
        <h3>Welcome, {fullname}</h3>
        <h4 onClick={handleLogout}>Logout</h4>
      </div>
    </Container>
  );
}

export default Home;
