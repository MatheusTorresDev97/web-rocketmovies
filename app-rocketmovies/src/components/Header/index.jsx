import { Link, useNavigate } from "react-router-dom";
import { Container, Profile, Logout } from "./styles";
import { Wrapper } from "../Wrapper";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

// eslint-disable-next-line react/prop-types
const Header = ({ children }) => {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const avatar = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
    <Wrapper>
      <Link to="/" className="only-in-desktop">
        <h2>RocketMovies</h2>
      </Link>
      {children}
      <Profile>
        <div>
          <p>{user.name}</p>
          <Logout type="button" onClick={handleSignOut}>
            Sair
          </Logout>
        </div>
        <Link to="/profile">
          <img src={avatar} alt={`Foto de ${user.name}`} />
        </Link>
      </Profile>
    </Wrapper>
  </Container>
  );
};

export default Header;
