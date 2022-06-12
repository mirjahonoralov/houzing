import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.form`
  padding: 24px 30px;
  width: 580px;
  display: flex;
  flex-direction: column;
  gap: 44px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  text-align: start;
  /* margin-bottom: 24px; */
`;

const SubTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  margin-bottom: 4px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #e6e9ec;
  width: 100%;
  outline: none;
  padding: 4px 0;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;

  :focus {
    border-bottom: 2px solid #0061df;
  }
`;
const Validation = styled.div`
  color: red;
  margin-top: 5px;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export { Container, Wrapper, Title, Input, SubTitle, Bottom, Validation };
