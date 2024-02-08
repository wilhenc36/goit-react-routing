import { NavLink } from "react-router-dom"
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;


const NavBar = () => {
    return (
        <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/About">About</StyledLink>
        </nav>
    )
}

export default NavBar