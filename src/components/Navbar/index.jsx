import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import {
  Container,
  Link,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./style";
import { Button } from "../Generic/Button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map(
              ({ title, id, path, hidden }) =>
                !hidden && (
                  <Link key={id} to={path}>
                    {title}
                  </Link>
                )
            )}
          </NavbarBody>
          <span>
            <Button onClick={() => navigate("/login")} width={"120px"}>
              Login
            </Button>
          </span>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
