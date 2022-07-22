import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1440px;
  padding: 34px 130px;
  gap: 32px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  width: 100%;
  padding: 24px 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Imgs = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ImgWrapper = styled.div`
  background: #c4c4c4;
  border-radius: 3px;
  width: 150px;
  height: 150px;
  max-height: 150px;
  max-width: 150px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  img {
    height: 100%;
  }
`;

const CheckboxesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 24px;
  margin-bottom: 30px;
`;

const UploadBtn = styled.label`
  background: #fff;
  color: #0061df;
  border: 1px solid #0061df;
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  justify-content: center;
  align-items: center;
  height: 44px;
  width: 150px;
  border-radius: 2px;
  cursor: pointer;

  -webkit-touch-callout: none; /** iOS safari */
  -webkit-user-select: none; /** safari */
  -khtml-user-select: center; /** Conqueror HTML*/
  -moz-user-select: none; /** Old version of FireFox */
  -ms-user-select: none; /** Internet Explorer / Edge */
  user-select: none; /** Non prefixed version, currently supported by chrome, Opera and FireFox */
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }

  input {
    display: none;
  }
`;

export {
  Container,
  MainWrapper,
  Wrapper,
  Section,
  ButtonWrapper,
  MediaWrapper,
  ImgWrapper,
  Imgs,
  CheckboxesWrapper,
  UploadBtn,
};
