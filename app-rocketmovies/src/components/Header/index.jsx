import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Container, Profile, Logout } from "./styles";
import { Wrapper } from "../Wrapper";

const Header = ({children}) => {
  return (
    <Container>
        <Wrapper>
        <Link to="/" className="only-in-desktop">
          <h2>RocketMovies</h2>
        </Link>
        {children}
        <Profile>
            <div>
                <p>Usuario</p>
                <Logout type="button">
                    Sair
                </Logout>
            </div>
            <Link to="/profile">
                
            </Link>
        </Profile>
        </Wrapper>
    </Container>
  )
}

export default Header