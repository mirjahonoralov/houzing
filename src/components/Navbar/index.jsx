import React, { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
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
  const { pathname } = useLocation();
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
            {localStorage.getItem("token") && pathname === "/my-properties" ? (
              <Button
                width={"120px"}
                type={"primary"}
                onClick={() => {
                  localStorage.clear();
                  navigate("/home");
                }}
              >
                Logout
              </Button>
            ) : localStorage.getItem("token") ? (
              <Button width={"50px"} onClick={() => navigate("/my-properties")}>
                <Icon.Account2 />
              </Button>
            ) : (
              <Button onClick={() => navigate("/sign-in")} width={"120px"}>
                SignIn
              </Button>
            )}
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
