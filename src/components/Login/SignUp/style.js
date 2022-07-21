import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  p {
    color: red;
  }
`;

const CustomForm = styled.form`
  width: 580px;
  padding: 24px 30px;
  display: flex;
  flex-direction: column;
  gap: 44px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;

const SuccessWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  gap: 30px;
`;

const Button = styled.button`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  justify-content: center;
  align-items: center;
  height: 44px;
  width: 100%;
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

  background: #0061df;
  color: #fff;
  border: none;
`;

export { Container, CustomForm, SuccessWrapper, Button, InputWrapper };
