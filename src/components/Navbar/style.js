import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoIcon } from "../../assets/icons/logo.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 0 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: center;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  max-width: 1440px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #fff;
`;

const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #fff;

  .active {
    color: #00fff5;
  }
`;

const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin: 0 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Icon = styled(logoIcon)``;
Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500;
`;

export { Wrapper, Container, NavbarWrapper, NavbarBody, Link, Logo };
