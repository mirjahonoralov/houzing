import React, { useState } from "react";
import {
  Bottom,
  Container,
  ForgotLink,
  Input,
  SubTitle,
  Title,
  ToSignUp,
  Validation,
  Wrapper,
} from "./style";
import { Button } from "../../Generic";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Checkbox, Spin } from "antd";
import Forgot from "./forgot";
import { Modal } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_BASE_URL: url } = process.env;

  const [forgot, setForgot] = useState(false);

  const navigate = useNavigate();

  const error = () =>
    Modal.error({
      title: "Error",
      content: "*Something went wrong, try again",
    });

  const { mutate } = useMutation(async () => {
    const res = await fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pw }),
    });
    return await res.json();
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) setIsValidEmail(true);
    if (!pw) setIsValidPassword(true);
    if (pw && email) {
      setLoading(true);
      mutate("something", {
        onSuccess: (res) => {
          if (res?.authenticationToken) {
            localStorage.setItem("token", res?.authenticationToken);
            navigate("/my-properties");
          }
        },
        onError: (err) => {
          setLoading(false);
          error();
          console.log(err);
        },
      });
    }
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        marginRight: "20px",
      }}
      spin
    />
  );

  return (
    <Container>
      <Wrapper>
        {forgot ? (
          <Forgot />
        ) : (
          <>
            <Title>Sign in</Title>
            <div>
              <SubTitle>Email</SubTitle>
              <Input
                value={email}
                required
                type="email"
                onChange={({ target }) => {
                  setIsValidEmail(false);
                  setEmail(target.value);
                }}
                placeholder="Email"
              />
              {isValidEmail && <Validation>*Enter Email</Validation>}
            </div>
            <div>
              <SubTitle>Password</SubTitle>
              <Input
                value={pw}
                onChange={({ target }) => {
                  setIsValidPassword(false);
                  setPw(target.value);
                }}
                placeholder="Password"
                type={"password"}
              />
              {isValidPassword && <Validation>*Enter Password</Validation>}
              <Bottom>
                <Checkbox>Remember me</Checkbox>
                <ForgotLink onClick={() => setForgot(true)}>Forgot</ForgotLink>
              </Bottom>
            </div>
            <ToSignUp>
              If you have not an account <Link to="/sign-up">Click here</Link>
            </ToSignUp>
            <Button onClick={onSubmit} type={"primary"}>
              {loading && <Spin indicator={antIcon} />}
              Login
            </Button>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default SignIn;
