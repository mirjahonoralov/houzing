import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import {
  Container,
  Icon,
  Link,
  Logo,
  MobileIcon,
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
                onClick={() => {
                  localStorage.clear();
                  navigate("/home");
                }}
              >
                Logout
              </Button>
            ) : localStorage.getItem("token") ? (
              <Icon.Account2 onClick={() => navigate("/my-properties")} />
            ) : (
              <Button onClick={() => navigate("/sign-in")} width={"120px"}>
                SignIn
              </Button>
            )}
          </span>

          <MobileIcon>
            {localStorage.getItem("token") && pathname === "/my-properties" ? (
              <Button
                width={"80px"}
                onClick={() => {
                  localStorage.clear();
                  navigate("/home");
                }}
              >
                Logout
              </Button>
            ) : localStorage.getItem("token") ? (
              <Icon.Account onClick={() => navigate("/my-properties")} />
            ) : (
              <Button onClick={() => navigate("/sign-in")} width={"80px"}>
                SignIn
              </Button>
            )}
          </MobileIcon>
        </NavbarWrapper>
      </Container>
      <Outlet />

      <MobileDrawer onClose={onClose} visible={visible} />
    </Wrapper>
  );
};

export default Navbar;
