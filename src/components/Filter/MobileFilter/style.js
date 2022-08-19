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
  @media ${device.mobileL} {
    padding: 0 20px;
  }

  @media ${device.mobileM} {
    padding: 0;
  }
`;

const MobileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
  @media ${device.mobileM} {
    padding: 15px;
  }
`;

const BtnsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export { Container, MobileWrapper, BtnsWrapper };
