import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import { Button, Input } from "../../components/Generic";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const { REACT_APP_BASE_URL: url } = process.env;

  const navigate = useNavigate();

  const { mutate } = useMutation(() => {
    return fetch(`${url}/public/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pw }),
    }).then((res) => res.json());
  });

  const onSubmit = () => {
    mutate("something", {
      onSuccess: (res) => {
        if (res?.authenticationToken) {
          localStorage.setItem("token", res?.authenticationToken);
          navigate("/home");
        }
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <Container>
      <Wrapper>
        <div className="title">Login</div>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          pl={20}
          placeholder="Email"
        />
        <Input
          value={pw}
          onChange={({ target }) => setPw(target.value)}
          pl={20}
          placeholder="Password"
        />
        <Button onClick={onSubmit} type={"primary"}>
          Login
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
