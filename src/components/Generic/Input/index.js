import React from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = ({
  name,
  placeholder,
  onChange,
  defaultValue,
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
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        pl={pl}
        type={type}
        width={width}
        onClick={onClick}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};
