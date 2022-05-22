import styled from "styled-components";
import { ReactComponent as home } from "../../assets/icons/home.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  gap: 20px;
  margin: 10px 0;
  padding: 0 130px;
`;

const Icon = styled.div``;

Icon.Home = styled(home)`
  margin-right: 15px;
`;
Icon.Setting = styled(setting)`
  margin-right: 15px;
`;
Icon.Search = styled(search)`
  margin-right: 15px;
`;

const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
`;

Advanced.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 10px;
`;

const Inputs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: flex-end;
`;

export { Container, Wrapper, Icon, Advanced, Inputs };
