import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoIcon } from "../../assets/icons/logo.svg";
import { device } from "../../utils/sizes";
import { ReactComponent as bar } from "../../assets/icons/navbar/bar.svg";
import { ReactComponent as account } from "../../assets/icons/navbar/account.svg";

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

  @media ${device.laptop} {
    padding: 0 50px;
  }

  @media ${device.mobileL} {
    padding: 0 20px;
  }
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
  /* display: none; */
  @media ${device.tablet} {
    justify-content: space-between;
    span {
      display: none;
    }
  }
`;

const Icon = styled.div``;
Icon.Bar = styled(bar)`
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
Icon.Account = styled(account)`
  @media (min-width: 768px) {
    cursor: pointer;
    display: none;
  }
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
  @media ${device.tablet} {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin: 0 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  @media ${device.tablet} {
    color: #000;
  }

  @media ${device.mobileL} {
    margin: 0;
  }
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

export {
  Wrapper,
  Container,
  NavbarWrapper,
  NavbarBody,
  Link,
  Logo,
  Icon,
  MobileMenu,
};
