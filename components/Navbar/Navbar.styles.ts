import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const LogoWrapper = styled.a`
  text-decoration: none;
`;

export const NavbarLinks = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`;

export const NavbarItem = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  color: #22262a;
  text-transform: uppercase;
`;

export const NavbarActions = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarAction = styled.div`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
