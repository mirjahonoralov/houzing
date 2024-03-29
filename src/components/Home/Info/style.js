import styled from "styled-components";
import { ReactComponent as img1 } from "../../../assets/icons/info/1.svg";
import { ReactComponent as img2 } from "../../../assets/icons/info/2.svg";
import { ReactComponent as img3 } from "../../../assets/icons/info/3.svg";
import { ReactComponent as img4 } from "../../../assets/icons/info/4.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* width: 1440px; */
  background: #f5f7fc;
`;

const Wrapper = styled.div`
  padding: 48px 9%;
  max-width: 1440px;
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
  gap: 50px;

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 200px;
  text-align: center;
`;

const Icon = styled.div``;

Icon.Discord = styled(img1)``;
Icon.Home = styled(img2)``;
Icon.Calculator = styled(img3)``;
Icon.Maps = styled(img4)``;

export { Container, Wrapper, Cards, Card, Icon };
