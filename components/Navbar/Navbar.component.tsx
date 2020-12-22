import React, { Fragment } from "react";
import { Container } from "..";
import {
  NavbarWrapper,
  LogoWrapper,
  NavbarLink,
  NavbarItem,
  NavbarLinks,
  NavbarAction,
  NavbarActions,
} from "./Navbar.styles";
import { Cart3, Heart, Search } from "@styled-icons/bootstrap";

const Navbar: React.FC = () => {
  return (
    <Fragment>
      <Container>
        <NavbarWrapper>
          <LogoWrapper></LogoWrapper>
          <NavbarLinks>
            <NavbarItem>
              <NavbarLink href="/">Home</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="/">Shop</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="/">Lookbook</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="/">Features</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="/">Pages</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="/">Blog</NavbarLink>
            </NavbarItem>
          </NavbarLinks>
          <NavbarActions>
            <NavbarAction>
              <Search size="16" />
            </NavbarAction>
            <NavbarAction>
              <Heart size="16" />
            </NavbarAction>
            <NavbarAction>
              <Cart3 size="16" />
            </NavbarAction>
          </NavbarActions>
        </NavbarWrapper>
      </Container>
    </Fragment>
  );
};

export default Navbar;
