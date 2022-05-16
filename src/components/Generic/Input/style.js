import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    case "primary":
      return {
        background: "#0061df",
        color: "#fff",
        border: "none",
      };
    default:
      return { border: "1px solid #e6e9ec", color: "#fff" };
  }
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-top: ${({ mt }) => `${mt}px`};
`;

const Icon = styled.div`
  position: absolute;
  margin-left: 10px;
`;

const Container = styled.input`
  height: ${({ height }) => height || "44px"};
  width: ${({ width }) => width || "100%"};
  border-radius: 2px;
  padding-left: ${({ pl }) => `${pl}px` || "15px"};
  display: flex;
  align-items: center;
  border: 1px solid #e6e9ec;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-style: normal;
  color: #0d263b;

  /* ${({ type }) => getType(type)} */
`;

export { Container, Wrapper, Icon };
