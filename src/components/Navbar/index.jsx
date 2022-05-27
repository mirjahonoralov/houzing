import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import {
  Container,
  Icon,
  Link,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./style";
import { Button } from "../Generic";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Icon.Bar onClick={showDrawer} />

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

          <NavLink to="/login">
            <Icon.Account />
          </NavLink>
        </NavbarWrapper>
      </Container>
      <Outlet />

      <MobileDrawer onClose={onClose} visible={visible} />
    </Wrapper>
  );
};

export default Navbar;
