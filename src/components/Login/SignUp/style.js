import styled from "styled-components";
import { Form, Input } from "formik-antd";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const CustomInput = styled(Input)`
  border: none;
  border-bottom: 2px solid #e6e9ec;
  width: 100%;
  outline: none;
  padding: 4px 0;
  outline: none;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;

  :focus {
    border-bottom: 2px solid #0061df;
  }

  :active {
    border: none;
  }
`;

const CustomForm = styled(Form)`
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

const Error = styled.div`
  color: red;
  text-align: center;
  font-size: 20px;
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

export { Container, CustomInput, CustomForm, Error, SuccessWrapper };
