import React, { useState } from "react";
import { Button, Input2 } from "../../Generic";
import { ForgotWrapper, InputWrapper } from "./style";
import { useHttp } from "../../../hooks/useHttp";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { Modal } from "antd";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailToken, setEmailToken] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const { request } = useHttp();

  const { mutate: verifyEmail } = useMutation(() => {
    return request({
      method: "POST",
      url: `/public/forgot-password?email=${email}`,
      body: { email },
    });
  });

  const { mutate: updatePassword } = useMutation(() => {
    return request({
      method: "PUT",
      url: `/public/reset-password?password=${newPassword}&token=${emailToken}`,
      body: { password: newPassword, token: emailToken },
    });
  });

  const success = () =>
    Modal.success({
      title: "Success",
      content: "Your password successfully changed",
      afterClose: () => window.location.reload(false),
    });

  const error = () =>
    Modal.error({
      title: "Error",
      content: "*Something went wrong, try again",
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) setIsValidEmail(true);
    if (!newPassword) setIsValidPassword(true);
    if (newPassword && email) {
      verifyEmail("verify Email", {
        onSuccess: (res) => {
          console.log(res, "res");
          setEmailToken(res.message);
        },
        onError: (err) => {
          console.log(err, "error");
          error();
        },
      });
    }
  };

  useEffect(() => {
    emailToken &&
      updatePassword("update", {
        onSuccess: (res) => {
          console.log(res, "updated res");
          if (res?.success) success();
        },
        onError: (err) => {
          console.log(err, "error update");
          error();
        },
      });
  }, [emailToken, updatePassword]);

  return (
    <ForgotWrapper>
      <div className="subtitle">Change password</div>

      <InputWrapper>
        <Input2
          placeholder={"Email"}
          type={"email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsValidEmail(false);
          }}
        />
        {isValidEmail && <p>Enter email</p>}
      </InputWrapper>

      <InputWrapper>
        <Input2
          placeholder={"New password"}
          type={"password"}
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
            setIsValidPassword(false);
          }}
        />
        {isValidPassword && <p>Enter new password</p>}
      </InputWrapper>
      <Button type={"primary"} onClick={onSubmit}>
        Update password
      </Button>
    </ForgotWrapper>
  );
};

export default Forgot;
