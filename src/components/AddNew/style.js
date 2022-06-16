import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1440px;
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

export { Container, Wrapper, Section, ButtonWrapper };
