import styled from "styled-components";
import { ReactComponent as bath } from "../../assets/icons/card/bath.svg";
import { ReactComponent as bed } from "../../assets/icons/card/bed.svg";
import { ReactComponent as car } from "../../assets/icons/card/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/card/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/card/love.svg";
import { ReactComponent as resize } from "../../assets/icons/card/resize.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

const Info = styled.div`
  padding: 25px;
  width: 100%;
  position: relative;
`;

Info.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Img = styled.img`
  max-width: 380px;
  min-width: 22px;
  height: 220px;
`;

const Person = styled.img`
  position: absolute;
  top: -20px;
  right: 20px;
  /* border:2px solid */
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  border-radius: 100%;
  padding: 2px;
`;

const Icon = styled.div``;

Icon.Bath = bath;
Icon.Bed = bed;
Icon.Car = car;
Icon.Ruler = ruler;
Icon.Love = love;
Icon.Resize = resize;

const Footer = styled.div`
  border-top: 1px solid #e6e9ec;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  main {
    display: flex;
    align-items: center;
    gap: 20px;

    span {
      background: #f6f8f9;
      border-radius: 60px;
      display: flex;
      padding: 7px;
    }
  }
`;

export { Container, Img, Info, ItemsWrapper, Icon, Footer, Person };
