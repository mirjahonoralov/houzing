import React from "react";
import { useQuery } from "react-query";
import { Container, Top, Wrapper } from "./style";
import { useHttp } from "../../hooks/useHttp";
import { Button } from "../Generic";
import { useNavigate } from "react-router-dom";
const MyProperties = () => {
  const navigate = useNavigate();
  const { request } = useHttp();
  const { data } = useQuery(
    "my properties",
    () => request({ url: "/v1/houses/me", token: true }),
    {
      onSuccess: (res) => {
        console.log(res);
      },
    }
  );
  return (
    <Container>
      <Top>
        <div className="title">Wrapper</div>
        <Button
          width={"131px"}
          type={"primary"}
          onClick={() => navigate("/properties/add-new")}
        >
          Add New
        </Button>
      </Top>
      <Wrapper>
        {data?.data?.map((house) => (
          <h2>{house?.description}</h2>
        ))}
      </Wrapper>
    </Container>
  );
};

export default MyProperties;
