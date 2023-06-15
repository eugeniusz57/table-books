import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-flex;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  min-width: 100px;
  margin: 10px;
  text-align: center;
  justify-content: center;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Nav = styled.nav`
  padding: 12px;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  color: white;
`;

export const NavLinkHeder = styled(NavLink)`
  display: block;
  padding: 4px;
  margin-left: 20px;
  color: #5cd3a8;
  transition: all 0.25s linear;
  &:hover,
  &.active,
  &:focus {
    color: #ebd8ff;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 36px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  font-size: 28px;
`;
