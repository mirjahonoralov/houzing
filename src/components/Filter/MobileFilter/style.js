import styled from "styled-components";
import { device } from "../../../utils/sizes";

const Container = styled.div`
  display: none;
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 50px;
  }
`;

const MobileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BtnsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export { Container, MobileWrapper, BtnsWrapper };
