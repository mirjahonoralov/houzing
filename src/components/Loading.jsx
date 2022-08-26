import React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Loading = () => {
  return (
    <Wrapper>
      <Spin size="large" />
    </Wrapper>
  );
};

export default Loading;
