import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as left } from "../../../assets/icons/left-arrow.svg";
import { ReactComponent as right } from "../../../assets/icons/right-arrow.svg";

const Container = styled(Carousel)`
  width: 100%;
  height: fit-content;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 570px;
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  background: #000;
`;

const Icon = styled.div``;

Icon.Right = styled(right)`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  opacity: 0.2;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  color: #fff;
  padding: 7px;
  z-index: 999;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 5%;
  padding: 12px;
  cursor: pointer;
  & path {
    fill: #0d263b;
  }
  :hover {
    opacity: 0.97;
  }
`;

Icon.Left = styled(left)`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  opacity: 0.2;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  color: #fff;
  padding: 7px;
  z-index: 999;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 5%;
  padding: 12px;
  cursor: pointer;
  & path {
    fill: #0d263b;
  }
  :hover {
    opacity: 0.97;
  }
`;

export { Container, Img, Wrapper, Icon };
