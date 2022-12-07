import styled from "styled-components";
import {Link as RouterLink} from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #000;
  font-size: 1.2rem;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`;

export const ThecyberSecurityLogo = styled.img`
  margin-left: -20px;
  width: auto;
  height: 50px;
`;

export const NavLogoSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  margin-left: 24px;
  font-family: 'Roboto', sans-serif;
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  height: 80px;
  
  @media screen and (max-width: 850px) {
    display: none;
`;

export const NavLink = styled(RouterLink)`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
    border-bottom: 3px solid cornflowerblue;
  }

`;