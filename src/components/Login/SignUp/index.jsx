import React from "react";
import Button from "../../Generic/Button";
import Input2 from "../../Generic/Input2";
import { Container, CustomForm, CustomInput, Wrapper } from "./style";
import { Formik } from "formik";
import { Form, Input } from "formik-antd";
import { useMutation } from "react-query";
import { useHttp } from "../../../hooks/useHttp";

const SignUp = () => {
  const { request } = useHttp();

  const { mutate: register } = useMutation("", (data) =>
    request({
      url: "/public/auth/register",
      method: "POST",
      body: data,
    })
  );

  const onSubmit = (formData) => {
    // register(
    //   { ...formData, roleIdSet: [1] },
    //   {
    //     onSuccess: (res) => {
    //       console.log(res, "success res");
    //     },
    //   }
    // );
    fetch("https://houzing-app.herokuapp.com/api/public/auth/register", {
      method: "POST",
      body: JSON.stringify({ ...formData, roleIdSet: [1] }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Container>
      {/* <Wrapper> */}
      <Formik
        initialValues={{}}
        onSubmit={onSubmit}
        enableReinitialize
        render={() => (
          <CustomForm>
            <div className="subtitle">Registration</div>
            {/* <CustomInput name={"login"} placeholder="Login" /> */}
            <CustomInput name={"firstname"} placeholder="First name" />
            <CustomInput name={"lastname"} placeholder="Last name" />
            <CustomInput name={"email"} placeholder="Email" />
            {/* <CustomInput name={"user_role"} placeholder="User role" /> */}
            <CustomInput name={"password"} placeholder="Password" />
            {/* <CustomInput name={"re_password"} placeholder="Re-enter password" /> */}
            {/* <Button type={"primary"} buttonType="submit">
              Register
            </Button> */}
            <button type="submit">button</button>
          </CustomForm>
        )}
      />
      {/* </Wrapper> */}
    </Container>
  );
};

export default SignUp;
