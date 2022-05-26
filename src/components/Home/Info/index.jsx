import React from "react";
import { InfoData } from "./data";
import { Card, Container, Wrapper } from "./style";

const InfoCard = ({ item }) => {
  const { icon, title, desc } = item;
  return (
    <Card>
      <img src={icon} alt="" />
      <div>
        <div className="subtitle">{title}</div>
        <div className="description">{desc}</div>
      </div>
    </Card>
  );
};

const Info = () => {
  return (
    <Container>
      <div className="title">Why Choose Us?</div>
      <div className="description">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        {InfoData.map((item, id) => (
          <InfoCard key={id} item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Info;
