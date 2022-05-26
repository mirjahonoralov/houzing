import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = forwardRef(
  (
    {
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
    },
    ref
  ) => {
    return (
      <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
        <Icon>{children}</Icon>
        <Container
          ref={ref}
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
  }
);

export default Input;
