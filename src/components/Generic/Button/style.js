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

const Container = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || "44px"};
  min-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 2px;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  cursor: pointer;

  -webkit-touch-callout: none; /** iOS safari */
  -webkit-user-select: none; /** safari */
  -khtml-user-select: center; /** Conqueror HTML*/
  -moz-user-select: none; /** Old version of FireFox */
  -ms-user-select: none; /** Internet Explorer / Edge */
  user-select: none; /** Non prefixed version, currently supported by chrome, Opera and FireFox */
  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;

export { Container };
