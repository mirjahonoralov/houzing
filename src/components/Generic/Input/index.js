import React from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = ({
  placeholder,
  children,
  onClick,
  width,
  type,
  pl,
  mr,
  ml,
  mb,
  mt,
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
      <Icon>{children}</Icon>
      <Container
        pl={pl}
        type={type}
        width={width}
        onClick={onclick}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};
