import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #e6e9ec;
  width: 100%;
  outline: none;
  padding: 4px 0;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;

  :focus {
    border-bottom: 2px solid #0061df;
  }
`;

const Input2 = ({ placeholder, value, name, onChange }) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input2;
