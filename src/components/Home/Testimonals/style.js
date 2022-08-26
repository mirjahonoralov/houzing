import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  width: 100%;
  background: #f5f7fc;

  @media (max-width: 570px) {
    padding: 0 10px;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  text-align: center;
  margin-top: 32px;
  margin: auto;
  padding-top: 32px;
  max-width: 1440px;
`;

const TestimonialWrapper = styled.div`
  width: 32%;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin: auto;

  @media (max-width: 550px) {
    width: 90%;
    min-width: 180px;
    /* margin: 0 10px;
    margin-right: 10px; */
  }
`;

const Card = styled.div`
  padding: 40px;
  height: 200px;
  background: #fff;
  width: 100%;
  position: relative;

  @media (max-width: 425px) {
    padding: 20px;
  }
`;

const Author = styled.div`
  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0d263b;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  position: relative;

  span {
    position: absolute;
    padding: 3px;
    border-radius: 100%;
    background: #fff;
    top: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { Wrapper, TestimonialWrapper, Card, Author, Container };
