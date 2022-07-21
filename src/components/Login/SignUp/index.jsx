import React, { useState } from "react";
import Button from "../../Generic/Button";
import Input2 from "../../Generic/Input2";
import { Container, CustomForm, CustomInput, Error, Wrapper } from "./style";
import { Formik } from "formik";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const error = () =>
    Modal.error({
      title: "Error",
      content: "*Something went wrong, try again",
    });

  const success = async () =>
    Modal.success({
      title: "Success",
      content: "We sent confirmation link to your email. Place confirm it",
      afterClose: () => navigate("/sign-in"),
    });

  const registered = async (status) => {
    console.log(status === 201);
    if (status === 201) {
      success();
    } else {
      error();
    }
  };

  const onSubmit = (formData) => {
    fetch("https://houzing-app.herokuapp.com/api/public/auth/register", {
      method: "POST",
      body: JSON.stringify({ ...formData, roleIdSet: [1] }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => registered(res?.status));
  };

  return (
    <Container>
      {/* {success ? (
        <Success />
      ) : ( */}
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
            {/* {error && <Error>*Something went wrong, try again</Error>} */}
          </CustomForm>
        )}
      />
      {/* )} */}
    </Container>
  );
};

export default SignUp;
