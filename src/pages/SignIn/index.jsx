import React, { useState } from "react";
import {
  Bottom,
  Container,
  Input,
  SubTitle,
  Title,
  Validation,
  Wrapper,
} from "./style";
import { Button } from "../../components/Generic";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Checkbox } from "antd";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const { REACT_APP_BASE_URL: url } = process.env;

  const navigate = useNavigate();

  const { mutate } = useMutation(async () => {
    const res = await fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pw }),
    });
    return await res.json();
  });

  const onSubmit = () => {
    if (!email) setIsValidEmail(true);
    if (!pw) setIsValidPassword(true);
    if (pw && email)
      mutate("something", {
        onSuccess: (res) => {
          if (res?.authenticationToken) {
            localStorage.setItem("token", res?.authenticationToken);
            navigate("/my-properties");
          }
        },
        onError: (err) => {
          console.log("err");
          console.log(err);
        },
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <div>
          <SubTitle>Login</SubTitle>
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
            <Link to="/">Forgot</Link>
          </Bottom>
        </div>
        <Button onClick={onSubmit} type={"primary"}>
          Login
        </Button>
      </Wrapper>

      {/* <ToastContainer /> */}
    </Container>
  );
};

export default Login;
