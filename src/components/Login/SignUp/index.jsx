import React from "react";
import Input2 from "../../Generic/Input2";
import { Button, Container, CustomForm, InputWrapper } from "./style";
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
      content: "We sent confirmation link to your email. Please confirm it",
      afterClose: () => navigate("/sign-in"),
    });

  const onSubmit = (formData) => {
    fetch("https://houzing-app.herokuapp.com/api/public/auth/register", {
      method: "POST",
      body: JSON.stringify({ ...formData, roleIdSet: [1] }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => (res?.status === 201 ? success() : error()));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Enter email";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      errors.email = "*Invalid email address";
    if (!values.firstname) errors.firstname = "Enter first name";
    if (!values.lastname) errors.lastname = "Enter last name";
    if (!values.password) errors.password = "Enter password";
    return errors;
  };

  return (
    <Container>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        }}
        validate={(values) => validate(values)}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <CustomForm onSubmit={handleSubmit}>
            <div className="subtitle">Registration</div>
            <InputWrapper>
              <Input2
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstname}
                name={"firstname"}
                placeholder="First name"
              />
              <p>{errors.firstname && touched.firstname && errors.firstname}</p>
            </InputWrapper>
            <InputWrapper>
              <Input2
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastname}
                name={"lastname"}
                placeholder="Last name"
              />
              <p>{errors.lastname && touched.lastname && errors.lastname}</p>
            </InputWrapper>
            <InputWrapper>
              <Input2
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name={"email"}
                placeholder="Email"
                type="email"
              />
              <p>{errors.email && touched.email && errors.email}</p>
            </InputWrapper>

            <InputWrapper>
              <Input2
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name={"password"}
                placeholder="Password"
                type="password"
              />
              <p>{errors.password && touched.password && errors.password}</p>
            </InputWrapper>
            <Button type="submit">Register</Button>
          </CustomForm>
        )}
      </Formik>
    </Container>
  );
};

export default SignUp;
